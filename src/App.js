import UsersList from "./components/users/UsersList";
import Header from "./components/Header/Header";
import AddUser from "./components/users/AddUser";
import { useState } from "react";
import EditUser from "./components/users/EditUser";
const data = [
  { id: "1", name: "Anom", position: "Junior SE", email: "rana@3" },
  { id: "2", name: "Megha", position: "Junior SE", email: "ahmad@4" },
  { id: "3", name: "Subham", position: "Junior SE", email: "shahzad@3" },
];
function App() {
  const [users, setUsers] = useState(data);
  const [showform, setShowForm] = useState(false);
  function hideUserModelHandler() {
    setShowForm(false);
  }
  function showUserModelHandler() {
    setShowForm(true);
  }

  function deleteHandler(id) {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== id);
      return updatedUsers;
    });
  }
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
  // const editUserHandler = (index, user) => {
  //   const newUsers = [...users];
  //   newUsers[index].name = user[index].name;
  //   newUsers[index].position = user[index].position;
  //   newUsers[index].email = user[index].email;
  //   return newUsers;
  // };
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
      <UsersList data={users} onDel={deleteHandler} />
    </div>
  );
}

export default App;
