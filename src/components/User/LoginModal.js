import React, { useState } from "react";

const LoginModal = ({ onClose, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    onClose(); // Call the onClose function
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    onSubmit({ email, password });
    // Reset the form
    setPassword("");
  };

  return (
    <div>
      <div>
        <h2 className="login-h2">
          Login
          <button onClick={handleClose} className="x-btn">
            X
          </button>
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="email">Email: </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="pass">
            <label className="">Password: </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex justify-end">
            <button className="" type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
