import { Button, InputLabel, List, ListItem } from "@mui/material";
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) });
  const onSubmit = async (data: any) => {
    try {
      await createUser(data);
      queryClient.invalidateQueries([GET_USERS]);
      router.push("/");
    } catch (e: any) {
      toast.error(`${e.message} ${e.response.data.message}`, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
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
          <InputLabel htmlFor="component-simple">Last Name</InputLabel>
          <InputField
            placeholder="Last Name..."
            register={register}
            error={has(errors, "lastName")}
            name="lastName"
          />

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
            name="password"
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

export default CreateUserForm;
