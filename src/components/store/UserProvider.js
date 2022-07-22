import React, { useState } from "react";
import UserContext from "./user-context";

function UserProvider(props) {
  ////////////////////////////initial data///////////////////
  const data = [
    { id: "1", name: "Sarmad", position: "Junior SE", email: "rana@3" },
    { id: "2", name: "Qamar", position: "Junior SE", email: "qamar@4" },
    { id: "3", name: "Awais", position: "Junior SE", email: "awais@3" },
  ];
  //////////////////User State//////////////////////////////////

  const [users, setUsers] = useState(data);

  ///////////////////////////Start handlerss///////////////////

  /////////////add User Handler///////////////////////
  const addUserHandler = (user) => {
    setUsers((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: user.name,
          position: user.position,
          email: user.email,
          id: Math.random().toString(),
        },
      ];
    });
  };
  ////////////////Delete handler///////////////////////////////
  const deleteHandler = (id) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== id);
      return updatedUsers;
    });
  };
  /////////////Edit User Handler//////////////////////////////
  const editUserHandler = (index, user) => {
    const newUsers = users;
    newUsers[index].name = user.name;
    newUsers[index].position = user.position;
    newUsers[index].email = user.email;
    setUsers(newUsers);
  };

  //////////////user context///////////////////////////////////
  const userContext = {
    usersList: users,
    addUser: addUserHandler,
    removeUser: deleteHandler,
    editUser: editUserHandler,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
