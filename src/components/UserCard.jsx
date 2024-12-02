function UserCard({ user, onDelete }) {
  return (
    <div className="user-card">
      <div className="user-card-inner">
        <img src={user.imageUrl} alt="User profile" className="user-image" />
        <h2>
          {user.firstName} {user.lastName}, {user.age} age.
        </h2>
        <p>From: {user.from}</p>
        <p>Job: {user.job}</p>
        <p>Gender: {user.gender}</p>
      </div>
      <button onClick={onDelete} className="delete-btn">
        Delete
      </button>
    </div>
  );
}

export default UserCard;
