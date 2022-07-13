import UsersList from "./components/users/UsersList";
import Header from "./components/Header/Header";
import AddUser from "./components/users/AddUser";
import { useState } from "react";
import EditUser from "./components/users/EditUser";
const data = [
  { id: "1", name: "Sarmad", position: "Junior SE", email: "rana@3" },
  { id: "2", name: "Qamar", position: "Junior SE", email: "qamar@4" },
  { id: "3", name: "Awais", position: "Junior SE", email: "awais@3" },
];
function App() {
  const [users, setUsers] = useState(data);
  const [showform, setShowForm] = useState(false);

  ////////////hide Modal
  function hideUserModelHandler() {
    setShowForm(false);
  }
  ////////////hide Modal
  function showUserModelHandler() {
    setShowForm(true);
  }

  /////////Delete User Handler////////////////////
  function deleteHandler(id) {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== id);
      return updatedUsers;
    });
  }

  ///Add User Handler/////////////////////////
  const addUserHandler = (fname, lname, email) => {
    setUsers((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: fname,
          position: lname,
          email: email,
          id: Math.random().toString(),
        },
      ];
    });
    console.log(fname, lname, email);
    setShowForm(false);
  };

  ///////////////////////Edit User Handler///////////////////////
  const editUserHandler = (index, user) => {
    const newUsers = users;
    newUsers[index].name = user.name;
    newUsers[index].position = user.position;
    newUsers[index].email = user.email;
    setUsers(newUsers);
  };
  ///////////////////////
  return (
    <div className="container">
      {/* <div className="app">User Management</div> */}
      <Header />
      <button onClick={showUserModelHandler}>Add</button>
      {showform && (
        <AddUser
          onClose={hideUserModelHandler}
          data={users}
          onAddUser={addUserHandler}
        />
      )}
      <UsersList data={users} onDel={deleteHandler} onEdit={editUserHandler} />
    </div>
  );
}

export default App;
