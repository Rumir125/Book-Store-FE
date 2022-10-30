import { InputLabel } from "@mui/material";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { has } from "lodash";
import { useState } from "react";
import { signIn } from "../../../pages/api/user-api";
import useStyles from "./styles";
import InputField from "../InputField";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../ErrorMessage";
import ActionButton from "../Shared/Button";

interface ILoginInput {
  username: string;
  password: string;
}

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required().min(5),
  })
  .required();

const LoginForm: React.FC<any> = () => {
  const router = useRouter();
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ILoginInput>({ resolver: yupResolver(schema) });
  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const res: any = await signIn(data);
      localStorage.setItem("jwtToken", res.data.access_token);
      router.push("/");
    } catch (e: any) {
      setError(e);
      toast.error(`${e.message} ${e.response.statusText}`, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    setLoading(false);
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
          <ErrorMessage name="username" errors={errors} />
          <InputLabel htmlFor="component-simple">Password</InputLabel>
          <InputField
            placeholder="Password..."
            register={register}
            error={has(errors, "password")}
            type="password"
            autoComplete="awd"
            name="password"
          />
          <ErrorMessage name="password" errors={errors} />
          <div className={classes.buttonWrapper}>
            <ActionButton
              variant="contained"
              type="submit"
              disabled={loading}
              isLoading={loading}
            >
              Submit
            </ActionButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
