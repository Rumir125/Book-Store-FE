import { Button, InputLabel, TextField } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { signIn } from "../../api/user-api";

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
    try {
      const res: any = await signIn(data);
      localStorage.setItem("jwtToken", res.data.access_token);
      router.push("/");
    } catch (e) {}
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div style={{ width: "fit-content", margin: "auto" }}>Login user</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputLabel htmlFor="component-simple">Username</InputLabel>
            <TextField
              placeholder="Username..."
              {...register("username", { required: true })}
              error={has(errors, "username")}
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
