import { Button, List, ListItem } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useUsers } from "../../hooks/useUsers";
import DeleteUserModal from "../DeleteUserModal";

const UsersList: React.FC<any> = () => {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState({});

  const handleOpenModal = (user: any) => {
    setUser(user);
    setModalOpen(true);
  };

  const { userData } = useUsers();
  const isAuthorized = useSelector((state: any) => state.user.authorized);

  return (
    <div>
      <List>
        {userData.map((item: any, index: number) => (
          <ListItem
            key={`${item.username}-${index}`}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {`${item.username} (${item.firstName} ${item.lastName})`}
            <div style={{ display: "flex", columnGap: "10px" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => router.push(`/books/user/${item.id}`)}
              >
                View Books
              </Button>
              {isAuthorized && (
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleOpenModal(item)}
                >
                  Delete User
                </Button>
              )}
            </div>
          </ListItem>
        ))}
      </List>
      {isAuthorized && (
        <DeleteUserModal open={modalOpen} setOpen={setModalOpen} user={user} />
      )}
    </div>
  );
};

export default UsersList;
