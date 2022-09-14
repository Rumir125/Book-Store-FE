import { Button, InputLabel, TextField } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { has } from "lodash";

import { useForm } from "react-hook-form";
import { createBook } from "../../api/hello";

const AddBook: NextPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    await createBook(data);
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
          {...register("title", { required: true })}
          error={has(errors, "title")}
        />
        <InputLabel htmlFor="component-simple">Author</InputLabel>
        <TextField
          placeholder="Author..."
          {...register("author", { required: true })}
          error={has(errors, "author")}
        />
        <InputLabel htmlFor="component-simple">Year</InputLabel>
        <TextField
          placeholder="Add year"
          {...register("year", { required: true })}
          error={has(errors, "year")}
        />

        <div>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
