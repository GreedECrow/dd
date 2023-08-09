import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <h2>Thanks for playing.</h2>
      <div>
        <nav>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/AboutUs">About Us</Link>
            </li>
            <li>
            <Link to="/Contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
