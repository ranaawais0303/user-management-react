import UsersList from "./components/users/UsersList";
import Header from "./components/Header/Header";
import AddUser from "./components/users/AddUser";
import { useState } from "react";
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
  function editHandler(id) {
    console.log("edit function");
  }

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
      <UsersList data={users} onDel={deleteHandler} onEdit={editHandler} />
    </div>
  );
}

export default App;
