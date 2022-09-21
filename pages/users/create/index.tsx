import { Button, InputLabel, List, ListItem, TextField } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { createUser } from "../../api/user-api";
import { has } from "lodash";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { queryClient } from "../../../src/services/queryClient";
import { GET_USERS } from "../../../src/keys/keys";

interface IFormInputs {
  firstName: string;
  lastName: number;
  username: string;
  password: string;
}

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const CreateUserPage: NextPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) });
  const onSubmit = async (data: any) => {
    await createUser(data);
    queryClient.invalidateQueries([GET_USERS]);
    router.push("/");
  };

  return (
    <div>
      <div style={{ width: "fit-content", margin: "auto" }}>
        <div>Sign Up</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputLabel htmlFor="component-simple">First Name</InputLabel>
          <TextField
            placeholder="Name of the book"
            {...register("firstName")}
            error={has(errors, "firstName")}
          />
          <InputLabel htmlFor="component-simple">Last Name</InputLabel>
          <TextField
            placeholder="Last Name..."
            {...register("lastName")}
            error={has(errors, "lastName")}
          />

          <InputLabel htmlFor="component-simple">Username</InputLabel>
          <TextField
            placeholder="Username..."
            {...register("username")}
            error={has(errors, "username")}
          />

          <InputLabel htmlFor="component-simple">Password</InputLabel>
          <TextField
            placeholder="Password..."
            {...register("password")}
            error={has(errors, "password")}
            type="password"
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
    </div>
  );
};

export default CreateUserPage;
