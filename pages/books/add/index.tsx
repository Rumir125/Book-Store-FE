import { Button, InputLabel, List, ListItem, TextField } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { has } from "lodash";

import { useForm } from "react-hook-form";
import { createBook } from "../../api/book-api";
import { queryClient } from "../../../src/services/queryClient";
import { GET_BOOKS } from "../../constants/keys";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CreateOrEditBook from "../../../src/components/CreateOrEditBook";

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
      <CreateOrEditBook />
    </div>
  );
};

export default AddBook;
