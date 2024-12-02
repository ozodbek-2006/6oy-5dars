import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserFrom";
import UserCard from "./components/UserCard";
import Modal from "./components/Modal";

function App() {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (userData) => {
    setUsers([...users, userData]);
    setShowForm(false);
  };

  const handleDelete = (index) => {
    const newUsers = users.filter((_, i) => i !== index);
    setUsers(newUsers);
  };

  return (
    <div className="app">
      <header>
        <h1>CUser</h1>
        <span className="user-count">
          {users.length ? `You have: ${users.length}` : "No User :("}
        </span>
      </header>

      <main>
        <div className="user-cards">
          {users.map((user, index) => (
            <UserCard
              key={index}
              user={user}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
      </main>

      <button className="create-user-btn" onClick={() => setShowForm(true)}>
        Create User
      </button>

      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <UserForm onSubmit={handleSubmit} />
        </Modal>
      )}
    </div>
  );
}

export default App;
