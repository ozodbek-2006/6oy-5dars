import { useState } from "react";

function UserForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    imageUrl: "",
    firstName: "",
    lastName: "",
    age: "",
    from: "",
    job: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-container">
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
            placeholder="Enter image URL"
          />
        </div>

        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="Enter first name"
          />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Enter last name"
          />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            placeholder="Enter age"
          />
        </div>

        <div className="form-group">
          <label>From:</label>
          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={handleChange}
            required
            placeholder="Enter location"
          />
        </div>

        <div className="form-group">
          <label>Job:</label>
          <input
            type="text"
            name="job"
            value={formData.job}
            onChange={handleChange}
            required
            placeholder="Enter job"
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                required
              />
              Male
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;
