import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  function deleteUser(id) {
    props.onDel(id);
  }
  return (
    <Card>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th colSpan={2}>Actions</th>
        </tr>
        {props.data.map((val) => {
          return (
            <tr key={val.id}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
              <td onClick={props.onEdit}>Edit</td>
              <td onClick={deleteUser.bind(null, val.id)}>Delete</td>
            </tr>
          );
        })}
      </table>
    </Card>
  );
};

export default UsersList;
