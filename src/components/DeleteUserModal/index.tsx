import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { deleteUser } from "../../../pages/api/user-api";
import { GET_USERS } from "../../../pages/constants/keys";
import { queryClient } from "../../services/queryClient";
import useStyles from "./styles";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DeleteUserModal: React.FC<any> = ({ open, setOpen, user }) => {
  const handleClose = () => setOpen(false);
  const classes = useStyles();

  const handleDeleteUser = async () => {
    await deleteUser(user.id);
    queryClient.invalidateQueries([GET_USERS]);
    setOpen(false);
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
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, paddingBottom: "20px" }}
          >
            Are you sure you want to delete this user?
          </Typography>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteUser}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default DeleteUserModal;
