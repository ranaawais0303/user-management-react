import React from "react";
const UserContext = React.createContext({
  usersList: [],
  totalAmount: 0,
  addUser: (item) => {},
  removeUser: (id) => {},
  editUser: (user) => {},
});
export default UserContext;
