import React from "react";
import { Link } from "react-router-dom";

import "./Users.css";

const User = ({ user }) => {
  return (
    <Link to={`/Users/${user._id}`} className="user-profile-link">
      <h3 style={{ fontWeight: "600",  fontSize: "30px", width: "55px", height: "55px", borderRadius: "50%", backgroundColor: "#333638", display: "flex", justifyContent: "center", alignItems: "center" }} >{user.name.charAt(0).toUpperCase()}</h3>
      <h5>{user.name}</h5>
    </Link>
  );
};

export default User;
