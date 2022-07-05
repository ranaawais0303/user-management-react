import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male" },
];
const UsersList = (props) => {
  return (
    <Card>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th colSpan={2}>Actions</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
              <td onClick="#">Edit</td>
              <td onClick="#">Delete</td>
            </tr>
          );
        })}
      </table>
    </Card>
  );
};

export default UsersList;
