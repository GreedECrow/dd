import React from 'react';
import ReactDOM from 'react-dom/client';

function MyName() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}

<div>  
    <select>
        <option value=>Pick your Race</option>
        <option value=>Vampire</option>
        <option value=>Warewolf</option>
        <option value=>Witch</option>
        <option value=>Zombie</option>
        </select>
    </div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyName />);

