import React from 'react'

function MyRace(){
    const [race, setRace] = useState("");
    return(
    <form>
            <select>
                <option value=>Pick your Race</option>
                <option value=>Vampire</option>
                <option value=>Warewolf</option>
                <option value=>Witch</option>
                <option value=>Zombie</option>
                onChange={(e) => setRace(e.target.value)}
            </select>
        </form>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRace />)