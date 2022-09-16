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
import { createUser, signIn } from "../../api/hello";

import { has } from "lodash";

const SignInPage: NextPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    const res: any = await signIn(data);
    console.log(res.data);
    localStorage.setItem("jwtToken", res.data.access_token);
    router.push("/");
  };

  return (
    <div>
      <Button variant="outlined">
        <Link href="/">Back to list</Link>
      </Button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div style={{ width: "fit-content", margin: "auto" }}>Login user</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputLabel htmlFor="component-simple">First Name</InputLabel>
            <TextField
              placeholder="First Name"
              {...register("firstName", { required: true })}
              error={has(errors, "firstName")}
            />
            <InputLabel htmlFor="component-simple">Last Name</InputLabel>
            <TextField
              placeholder="Last Name..."
              {...register("lastName", { required: true })}
              error={has(errors, "lastName")}
            />

            <InputLabel htmlFor="component-simple">Password</InputLabel>
            <TextField
              placeholder="Password..."
              {...register("password", { required: true })}
              error={has(errors, "password")}
              type="password"
              autoComplete="awd"
            />

            <div>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
