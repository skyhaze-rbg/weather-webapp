// Navbar.js
import React, { useState } from "react";
import LoginModal from "./User/LoginModal";
import SignupModal from "./User/SignupModal";

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const openSignupModal = () => {
    setShowSignupModal(true);
  };

  const closeSignupModal = () => {
    setShowSignupModal(false);
  };

  const handleSubmit = (formData) => {
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Weather App</h1>
      </div>
      <div className="navbar-right">
        <button className="login-btn" onClick={openLoginModal}>
          Login
        </button>
        <button className="signup-btn" onClick={openSignupModal}>
          Sign Up
        </button>
      </div>
      {showLoginModal && <LoginModal onClose={closeLoginModal} />}
      {showSignupModal && (
        <SignupModal onClose={closeSignupModal} onSubmit={handleSubmit} />
      )}
    </nav>
  );
};

export default Navbar;
