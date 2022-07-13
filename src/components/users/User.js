import React from "react";
import classes from "./user.module.css";
function User(props) {
  return (
    <tr key={props.id}>
      <td>{props.name}</td>
      <td>{props.position}</td>
      <td>{props.email}</td>
      <td className={classes.edit} onClick={props.onEdit}>
        Edit
      </td>
      <td className={classes.del} onClick={props.onDel}>
        Delete
      </td>
    </tr>
  );
}

export default User;
