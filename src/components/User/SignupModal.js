import React, { useState } from "react";

const SignupModal = ({ onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    onClose(); // Call the onClose function
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      password,
    };
    onSubmit(formData);
  };

  return (
    <div>
      <div>
        <h2 className="login-h2">
          Sign Up
          <button onClick={handleClose} className="x-btn">
            X
          </button>
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label">Name: </label>
            <input
              className=""
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="email">Email: </label>
            <input
              className=""
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="pass">Password: </label>
            <input
              className=""
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="">
            <button className="" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
