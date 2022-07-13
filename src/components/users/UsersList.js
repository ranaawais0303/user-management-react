import React, { useState } from "react";
import Card from "../UI/Card";
import EditUser from "./EditUser";
import User from "./User";
import classes from "./UsersList.module.css";
let myuser;
let myIndex;
const UsersList = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  const [users, setUsers] = useState(props.data);
  function deleteUser(id) {
    props.onDel(id);
  }

  //set index and send that index user to edit user
  function editUser(index) {
    setShowEdit(true);
    myIndex = index;
    myuser = users[myIndex];
    console.log(myuser);
  }
  const hideForm = () => {
    setShowEdit(false);
  };

  ///////////////change state according to edit value/update
  const editUserHandler = (user) => {
    const newUsers = users;
    newUsers[myIndex].name = user.name;
    newUsers[myIndex].position = user.position;
    newUsers[myIndex].email = user.email;
    setUsers(newUsers);
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
