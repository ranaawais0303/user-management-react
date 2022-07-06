import React from "react";
import Card from "../UI/Card";
import User from "./User";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  function deleteUser(id) {
    props.onDel(id);
  }
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
          {props.data.map((val) => {
            return (
              <User
                key={val.id}
                name={val.name}
                position={val.position}
                email={val.email}
                onDel={deleteUser.bind(null, val.id)}
                onEdit={props.onEdit}
              />
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default UsersList;
