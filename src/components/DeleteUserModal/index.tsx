import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { deleteUser } from "../../../pages/api/user-api";
import { GET_USERS } from "../../keys/keys";
import { queryClient } from "../../services/queryClient";
import useStyles from "./styles";

import { toast } from "react-toastify";
import ActionButton from "../Shared/Button";

const DeleteUserModal: React.FC<any> = ({ open, setOpen, user }) => {
  const handleClose = () => setOpen(false);
  const classes = useStyles();

  const handleDeleteUser = async () => {
    try {
      await deleteUser(user.id);
      queryClient.invalidateQueries([GET_USERS]);
      setOpen(false);
      toast.success("You have successfully delete a user", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } catch (e) {
      toast.error("You are not authorized to delete this user", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.container}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {`${user.firstName} ${user.lastName}`}
          </Typography>
          <Typography id="modal-modal-description" className={classes.subtitle}>
            Are you sure you want to delete this user?
          </Typography>
          <Box className={classes.cancelButton}>
            <ActionButton variant="outlined" onClick={handleClose}>
              Cancel
            </ActionButton>
            <ActionButton
              variant="contained"
              color="error"
              onClick={handleDeleteUser}
            >
              Delete
            </ActionButton>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default DeleteUserModal;
