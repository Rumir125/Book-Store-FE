import { Button, InputLabel, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { has } from "lodash";
import { useState } from "react";
import { signIn } from "../../../pages/api/user-api";
import useStyles from "./styles";
import InputField from "../InputField";

const SignInForm: React.FC<any> = () => {
  const router = useRouter();
  const [error, setError] = useState<any>(null);
  const classes = useStyles();

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
    } catch (e: any) {
      setError(e);
    }
  };

  return (
    <div>
      <div className={classes.container}>
        <div>Login user</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputLabel htmlFor="component-simple">Username</InputLabel>
          <InputField
            placeholder="Username..."
            register={register}
            error={has(errors, "username")}
            name="username"
          />
          <InputLabel htmlFor="component-simple">Password</InputLabel>
          <InputField
            placeholder="Password..."
            register={register}
            error={has(errors, "password")}
            type="password"
            autoComplete="awd"
            name="password"
          />
          <div className={classes.buttonWrapper}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
