import UsersList from "./components/users/UsersList";
import Header from "./components/Header/Header";
import AddUser from "./components/users/AddUser";
import { useState } from "react";

import UserProvider from "./components/store/UserProvider";

function App() {
  /////////////////State for form///////////////////
  const [showform, setShowForm] = useState(false);

  ////////////hide Modal
  function hideUserModelHandler() {
    setShowForm(false);
  }
  ////////////hide Modal
  function showUserModelHandler() {
    setShowForm(true);
  }

  ///////////////////////
  return (
    <UserProvider>
      <div className="container">
        <Header />
        <button onClick={showUserModelHandler}>Add</button>
        {showform && <AddUser onClose={hideUserModelHandler} />}
        <UsersList />
      </div>
    </UserProvider>
  );
}

export default App;
