import React from "react";

function User(props) {
  return (
    <tr key={props.id}>
      <td>{props.name}</td>
      <td>{props.position}</td>
      <td>{props.email}</td>
      <td onClick={props.onEdit}>Edit</td>
      <td onClick={props.onDel}>Delete</td>
    </tr>
  );
}

export default User;
