import {
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  TextField,
} from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { createUser } from "../../api/hello";

import { has } from "lodash";

const CreateUserPage: NextPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    await createUser(data);
    router.push("/");
  };

  const backToList = () => {
    router.push("/");
  };

  console.log("render create user");

  return (
    <div>
      <Button variant="outlined">
        <Link href="/">Back to list</Link>
      </Button>
      <div>Create a new book</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel htmlFor="component-simple">First Name</InputLabel>
        <TextField
          placeholder="Name of the book"
          {...register("firstName", { required: true })}
          error={has(errors, "firstName")}
        />
        <InputLabel htmlFor="component-simple">Last Name</InputLabel>
        <TextField
          placeholder="Last Name..."
          {...register("lastName", { required: true })}
          error={has(errors, "lastName")}
        />

        <div>
          <FormControlLabel
            control={<Checkbox defaultChecked {...register("isActive")} />}
            label="Is Active"
          />
        </div>

        <div>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateUserPage;
