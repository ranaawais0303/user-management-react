import UsersList from "./components/users/UsersList";
import Header from "./components/Header/Header";
import AddUser from "./components/users/AddUser";
import { useState } from "react";
const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male" },
];
function App() {
  const [showform, setShowForm] = useState(false);
  function hideUserModelHandler() {
    setShowForm(false);
  }
  function showUserModelHandler() {
    setShowForm(true);
  }
  return (
    <div className="container">
      {/* <div className="app">User Management</div> */}
      <Header />
      <button onClick={showUserModelHandler}>Add</button>
      {showform && <AddUser onClose={hideUserModelHandler} />}
      <UsersList data={data} />
    </div>
  );
}

export default App;
