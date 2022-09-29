import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { deleteBook } from "../../../pages/api/book-api";
import { GET_BOOKS } from "../../keys/keys";
import { queryClient } from "../../services/queryClient";
import useStyles from "./styles";

import { toast } from "react-toastify";

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

const DeleteBookModal: React.FC<any> = ({ modalOpen, setModalOpen, book }) => {
  const handleClose = () => setModalOpen(false);
  const classes = useStyles();

  const handleDeleteBook = async () => {
    try {
      await deleteBook(book.id);
      queryClient.invalidateQueries([GET_BOOKS]);
      toast.success("You have successfully deleted a book!", {
        position: toast.POSITION.TOP_LEFT,
      });
    } catch (e: any) {
      toast.error(`${e.message} ${e.response.statusText}`, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    setModalOpen(false);
  };

  return (
    <Box>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.container}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {`${book.title} `}
          </Typography>
          <Typography id="modal-modal-description" className={classes.subtitle}>
            Are you sure you want to delete this book?
          </Typography>
          <Box className={classes.cancelButton}>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteBook}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default DeleteBookModal;
