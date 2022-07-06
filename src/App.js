import UsersList from "./components/users/UsersList";
import Header from "./components/Header/Header";
import AddUser from "./components/users/AddUser";
import { useState } from "react";
const data = [
  { id: "1", name: "Anom", age: 19, gender: "Male" },
  { id: "2", name: "Megha", age: 19, gender: "Female" },
  { id: "3", name: "Subham", age: 25, gender: "Male" },
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
  function editHandler(id) {
    console.log("edit function");
  }

  return (
    <div className="container">
      {/* <div className="app">User Management</div> */}
      <Header />
      <button onClick={showUserModelHandler}>Add</button>
      {showform && <AddUser onClose={hideUserModelHandler} data={users} />}
      <UsersList data={users} onDel={deleteHandler} onEdit={editHandler} />
    </div>
  );
}

export default App;
