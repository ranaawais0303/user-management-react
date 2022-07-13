import React, { useState } from "react";
import Card from "../UI/Card";
import EditUser from "./EditUser";
import User from "./User";
import classes from "./UsersList.module.css";
let myuser;
let myIndex;
const UsersList = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  function deleteUser(id) {
    props.onDel(id);
  }

  //set index and send that index user to edit user
  function editUser(index) {
    setShowEdit(true);
    myIndex = index;
    myuser = props.data[myIndex];
    console.log(myuser);
  }
  const hideForm = () => {
    setShowEdit(false);
  };

  ///////////////send user to app.js which receive from edit user
  const editUserHandler = (user) => {
    props.onEdit(myIndex, user);
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
          {props.data.map((val, index) => {
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
              onEdit={editUser}
              onEditUser={editUserHandler}
            />
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default UsersList;
