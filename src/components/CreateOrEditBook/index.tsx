import React from "react";
import { Button, InputLabel, List, ListItem, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { has } from "lodash";

import { useForm } from "react-hook-form";
import { queryClient } from "../../../src/services/queryClient";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GET_BOOKS } from "../../../pages/constants/keys";
import { createBook, editBook } from "../../../pages/api/book-api";

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

const CreateOrEditBook: React.FC<any> = ({ book, isEdit = false }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) });
  const onSubmit = async (data: any) => {
    if (isEdit) {
      await editBook(book.id, data);
    } else {
      await createBook(data);
    }
    queryClient.invalidateQueries([GET_BOOKS]);
    router.push("/books");
  };

  const backToList = () => {
    router.push("/books");
  };

  return (
    <div>
      <div>{isEdit ? "Edit a book" : "Create a new book"}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel htmlFor="component-simple">Title</InputLabel>
        <TextField
          placeholder="Name of the book"
          {...register("title")}
          error={has(errors, "title")}
          defaultValue={isEdit ? book.title : ""}
        />
        <InputLabel htmlFor="component-simple">Author</InputLabel>
        <TextField
          placeholder="Author..."
          {...register("author")}
          error={has(errors, "author")}
          defaultValue={isEdit ? book.author : ""}
        />
        <InputLabel htmlFor="component-simple">Year</InputLabel>
        <TextField
          placeholder="Add year"
          {...register("year")}
          error={has(errors, "year")}
          defaultValue={isEdit ? book.year : ""}
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

export default CreateOrEditBook;
