import React from "react";
import { Button, InputLabel, List, ListItem, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { has } from "lodash";

import { useForm } from "react-hook-form";
import { queryClient } from "../../../src/services/queryClient";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GET_BOOKS } from "../../keys/keys";
import { createBook, editBook } from "../../../pages/api/book-api";
import MultipleSelect from "../MultiSelect";
import { useSelector } from "react-redux";

const names = [
  "Fantasy",
  "Science Fiction",
  "Dystopian",
  "Action Adventure",
  "Mystery",
  "Horror",
  "Historical fiction",
  "Romance",
  "Novel",
  "Short Story",
  "Children",
  "Biography",
  "Food & Drink",
  "Art & Photography",
  "Self help",
  "History",
  "True Crime",
  "Humor",
  "Essays",
  "Religion & Spirituality",
  "Humanities & Social Sciences",
  "Parenting & Families",
  "Science & Technology",
];

interface IFormInputs {
  title: string;
  author: number;
  year: number;
  genres: string[];
}

const schema = yup
  .object({
    title: yup.string().required(),
    author: yup.string().required(),
    year: yup.number().required(),
    genres: yup.array(yup.string()).required(),
  })
  .required();

const CreateOrEditBook: React.FC<any> = ({ book, isEdit = false }) => {
  const router = useRouter();

  const userId = useSelector((state: any) => state.user.userID);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) });
  const onSubmit = async (data: any) => {
    if (isEdit) {
      await editBook(book.id, data);
    } else {
      await createBook(data);
    }
    queryClient.invalidateQueries([GET_BOOKS]);
    queryClient.invalidateQueries([GET_BOOKS, userId]);
    router.push("/");
  };

  register("genres");
  return (
    <div>
      <div>{isEdit ? "Edit a book" : "Create a new book"}</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "fit-content", margin: "auto" }}
      >
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

        <MultipleSelect
          values={names}
          setValue={setValue}
          defaultValue={isEdit ? book.genres : []}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button variant="contained" type="submit">
            {isEdit ? "Update Book" : "Create Book"}
          </Button>
        </div>
      </form>

      <List style={{ width: "fit-content", margin: "auto" }}>
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
