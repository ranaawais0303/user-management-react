import UsersList from "./components/users/UsersList";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="container">
      {/* <div className="app">User Management</div> */}
      <Header />
      <button>Add</button>
      <UsersList />
    </div>
  );
}

export default App;
