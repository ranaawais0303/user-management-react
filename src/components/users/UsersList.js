import React, { useState, useContext } from "react";
import Card from "../UI/Card";
import EditUser from "./EditUser";
import User from "./User";
import UserContext from "../store/user-context";
import classes from "./UsersList.module.css";

/////////////////set user and index for update user.///
let myuser;
let myIndex;
const UsersList = () => {
  const userCtx = useContext(UserContext);

  const [showEdit, setShowEdit] = useState(false);
  function deleteUser(id) {
    userCtx.removeUser(id);
  }

  //set index and send that index user to edit user
  function editUser(index) {
    setShowEdit(true);
    myIndex = index;
    myuser = userCtx.usersList[myIndex];
  }
  const hideForm = () => {
    setShowEdit(false);
  };

  ///////////////send user to app.js which receive from edit user
  const editUserHandler = (user) => {
    userCtx.editUser(myIndex, user);
    setShowEdit(false);
  };
  return (
    <Card>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Email</th>
            <th colSpan={2}>Actions</th>
          </tr>
          {userCtx.usersList.map((val, index) => {
            return (
              <User
                key={val.id}
                name={val.name}
                position={val.position}
                email={val.email}
                onDel={deleteUser.bind(null, val.id)}
                onEdit={editUser.bind(null, index)}
              />
            );
          })}
          {showEdit && (
            <EditUser
              onClose={hideForm}
              user={myuser}
              onEditUser={editUserHandler}
            />
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default UsersList;
