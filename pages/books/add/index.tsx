import { NextPage } from "next";
import { useRouter } from "next/router";
import { SyntheticEvent } from "react";
import { useForm } from "react-hook-form";

const AddBook: NextPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const backToList = () => {
    router.push("/books");
  };

  console.log("render add book");

  return (
    <div>
      <button onClick={backToList}>Back to list</button>
      <div>Create a new book</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input defaultValue="test" {...register("title")}></input>
        </div>
        <div>
          <input defaultValue="test" {...register("author")}></input>
        </div>
        <div>
          <input defaultValue="test" {...register("year")}></input>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
