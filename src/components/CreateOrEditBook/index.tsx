import React, { useState } from "react";
import { Button, InputLabel } from "@mui/material";
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

import { toast } from "react-toastify";
import RichTextEditor from "../RichTextEditor";
import useStyles from "./styles";
import ErrorMessage from "../ErrorMessage";
import InputField from "../InputField";
import UploadImage from "../UploadImage";
import { useUploadImage } from "../UploadImage/hooks";
import ActionButton from "../Shared/Button";

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
  description: string;
  photoUrl: string;
}

const schema = yup
  .object({
    title: yup.string().required(),
    author: yup.string().required(),
    year: yup.number().required(),
    genres: yup.array(yup.string()).required(),
    description: yup.string(),
    photoUrl: yup.string(),
  })
  .required();

const CreateOrEditBook: React.FC<any> = ({ book, isEdit = false }) => {
  const classes = useStyles();
  const router = useRouter();
  const userId = useSelector((state: any) => state.user.userId);

  const [isUpdateloading, setIsUpdateLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    // reset,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    // defaultValues: useMemo(() => {
    //   return book;
    // }, []),
  });
  register("genres");
  register("description");
  register("photoUrl");

  const {
    uploading,
    setUploading,
    handleUploadImage,
    completeUpload,
    imageUrl,
  } = useUploadImage({ setValue, photoUrl: book.photoUrl });

  const onSubmit = async (data: any) => {
    try {
      setIsUpdateLoading(true);
      const uploadUrl = await completeUpload();
      const dataToSend = { ...data, photoUrl: uploadUrl };
      if (isEdit) {
        await editBook(book.id, dataToSend);
      } else {
        await createBook(dataToSend);
      }
      queryClient.invalidateQueries([GET_BOOKS]);
      queryClient.invalidateQueries([
        GET_BOOKS,
        book?.user ? book.user.id : userId,
      ]);
      router.push(`/books/user/${book?.user ? book.user.id : userId}`);
    } catch (e: any) {
      toast.error(`${e.message} ${e.response.statusText}`, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    setIsUpdateLoading(false);
  };

  const submitDisabled = uploading || isUpdateloading;

  return (
    <div>
      <div className={classes.title}>
        {isEdit ? "Edit a book" : "Create a new book"}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.inputWrapper}>
          <UploadImage
            setValue={setValue}
            uploading={uploading}
            setUploading={setUploading}
            imageUrl={imageUrl}
            handleUploadImage={handleUploadImage}
          />
          <InputLabel htmlFor="component-simple">Title</InputLabel>
          <InputField
            placeholder="Name of the book"
            register={register}
            error={has(errors, "title")}
            defaultValue={isEdit ? book.title : ""}
            name="title"
          />
          <ErrorMessage name="title" errors={errors} />

          <InputLabel htmlFor="component-simple">Author</InputLabel>
          <InputField
            placeholder="Author..."
            register={register}
            name="author"
            error={has(errors, "author")}
            defaultValue={isEdit ? book.author : ""}
          />
          <ErrorMessage name="author" errors={errors} />

          <InputLabel htmlFor="component-simple">Year</InputLabel>
          <InputField
            placeholder="Add year"
            register={register}
            name="year"
            error={has(errors, "year")}
            defaultValue={isEdit ? book.year : ""}
          />

          <ErrorMessage name="year" errors={errors} />
          <MultipleSelect
            values={names}
            setValue={setValue}
            defaultValue={isEdit ? book.genres : []}
            name="genres"
            label="Genres"
          />
          <InputLabel htmlFor="component-simple">Description</InputLabel>
          <RichTextEditor
            theme="snow"
            setValue={setValue}
            name="description"
            defaultValue={isEdit ? book.description : ""}
          />
        </div>
        <div className={classes.cancelButtonWrapper}>
          <ActionButton
            variant="outlined"
            onClick={() =>
              router.push(
                `/books/user/${book?.user.id ? book.user.id : userId}`
              )
            }
            style={{ color: "#1976d2" }}
          >
            Cancel
          </ActionButton>
          <ActionButton
            variant="contained"
            type="submit"
            disabled={submitDisabled}
            isLoading={submitDisabled}
          >
            {isEdit ? "Update Book" : "Create Book"}
          </ActionButton>
        </div>
      </form>
    </div>
  );
};

export default CreateOrEditBook;
