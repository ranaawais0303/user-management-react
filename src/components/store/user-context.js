import React from "react";
const UserContext = React.createContext({
  usersList: [],
  totalAmount: 0,
  addUser: (user) => {},
  removeUser: (id) => {},
  editUser: (user) => {},
});
export default UserContext;
