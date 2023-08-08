import React from "react";

export default function Header() {
  return (
    <header>
      <div>
        <h1>FANTASY CHARACTERSHEET BUILDER</h1>
        <nav class="drop">
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="CharacterSheet.js">Character Creator</a>
            </li>
            <li>
              <a href="SavedCharacters">Saved Characters</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
