import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header>
      <div>
        <h1>FANTASY CHARACTERSHEET BUILDER</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/CSheet">Character Creator</Link>
            </li>
            <li>
              <Link to="/SavedCSheet">Saved Characters</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
