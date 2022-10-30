import { Button, InputLabel } from "@mui/material";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { has } from "lodash";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { queryClient } from "../../services/queryClient";
import { GET_USERS } from "../../keys/keys";
import { toast } from "react-toastify";
import InputField from "../InputField";
import { createUser } from "../../../pages/api/user-api";
import useStyles from "./styles";
import { useState } from "react";
import ErrorMessage from "../ErrorMessage";
import ActionButton from "../Shared/Button";

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

const CreateUserForm: React.FC<any> = () => {
  const router = useRouter();
  const classes = useStyles();
  const [submitLoading, setSubmitLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) });
  const onSubmit = async (data: any) => {
    try {
      setSubmitLoading(true);
      await createUser(data);
      queryClient.invalidateQueries([GET_USERS]);
      router.push("/");
    } catch (e: any) {
      toast.error(`${e.message} ${e.response.data.message}`, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    setSubmitLoading(false);
  };

  return (
    <div>
      <div className={classes.container}>
        <div>Sign Up</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputLabel htmlFor="component-simple">First Name</InputLabel>
          <InputField
            placeholder="Name of the book"
            register={register}
            error={has(errors, "firstName")}
            name="firstName"
          />
          <ErrorMessage errors={errors} name="firstName" />
          <InputLabel htmlFor="component-simple">Last Name</InputLabel>
          <InputField
            placeholder="Last Name..."
            register={register}
            error={has(errors, "lastName")}
            name="lastName"
          />
          <ErrorMessage errors={errors} name="lastName" />

          <InputLabel htmlFor="component-simple">Username</InputLabel>
          <InputField
            placeholder="Username..."
            register={register}
            error={has(errors, "username")}
            name="username"
          />
          <ErrorMessage errors={errors} name="username" />
          <InputLabel htmlFor="component-simple">Password</InputLabel>
          <InputField
            placeholder="Password..."
            register={register}
            error={has(errors, "password")}
            type="password"
            name="password"
          />
          <ErrorMessage errors={errors} name="password" />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "10px",
            }}
          >
            <ActionButton
              variant="contained"
              type="submit"
              isLoading={submitLoading}
              disabled={submitLoading}
            >
              Submit
            </ActionButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUserForm;
