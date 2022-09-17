import { Button, InputLabel, List, ListItem, TextField } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { has } from "lodash";

import { useForm } from "react-hook-form";
import { createBook } from "../../api/hello";
import { queryClient } from "../../../src/services/queryClient";
import { GET_BOOKS } from "../../constants/keys";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInputs {
  title: string;
  author: number;
  year: number;
}

const schema = yup
  .object({
    title: yup.string().required(),
    author: yup.string().required(),
    year: yup.number().required(),
  })
  .required();

const AddBook: NextPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) });
  const onSubmit = async (data: any) => {
    await createBook(data);
    queryClient.invalidateQueries([GET_BOOKS]);
    router.push("/books");
  };

  const backToList = () => {
    router.push("/books");
  };

  return (
    <div>
      <Button variant="outlined" onClick={backToList}>
        Back to list
      </Button>
      <div>Create a new book</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel htmlFor="component-simple">Title</InputLabel>
        <TextField
          placeholder="Name of the book"
          {...register("title")}
          error={has(errors, "title")}
        />
        <InputLabel htmlFor="component-simple">Author</InputLabel>
        <TextField
          placeholder="Author..."
          {...register("author")}
          error={has(errors, "author")}
        />
        <InputLabel htmlFor="component-simple">Year</InputLabel>
        <TextField
          placeholder="Add year"
          {...register("year")}
          error={has(errors, "year")}
        />

        <div>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </form>

      <List>
        {Object.values(errors).map((err, i) => (
          <ListItem style={{ color: "red", paddingTop: "0px" }} key={i}>
            *{err.message}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default AddBook;
