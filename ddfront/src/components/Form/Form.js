import React, { useState } from "react";

export default function Form({ onSubmitFunc, sheet }) {
  const [formData, setFormData] = useState(
    sheet ?? {
      Name: "",
      Race: "",
      Role: "",
      Alignment: "",
    }
  );

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const submit = (event) => {
    event.preventDefault();
    onSubmitFunc(formData);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          placeholder="Character Name"
          onChange={handleChange}
          name="Name"
          value={formData.Name}
        ></input>

        <select onChange={handleChange} name="Race">
          <option disabled selected value="Pick your Race">
            Pick your Race
          </option>
          <option value="Vampire">Vampire</option>
          <option value="Warewolf">Warewolf</option>
          <option value="Witch">Witch</option>
          <option value="Zombie">Zombie</option>
        </select>

        <select onChange={handleChange} name="Role">
          <option disabled selected value="Pick your Role">
            Pick your Role
          </option>
          <option value="Tank">Tank</option>
          <option value="DPS">DPS</option>
          <option value="Black Mage">Black Mage</option>
          <option value="Healer">Healer</option>
        </select>

        <select onChange={handleChange} name="Alignment">
          <option disabled selected value="Pick your Alignment">
            Pick your Alignment
          </option>
          <option value="Rebal Scum">Rebal Scum</option>
          <option value="FOR THE FJORD!!">FOR THE FJORD!!</option>
          <option value="Money Money Money">Money Money Money</option>
          <option value="We don't really have a label for it.">
            We don't really have a label for it.
          </option>
        </select>

        <section>
        <h2>Pick Your Weapon</h2>
        <input type="radio" id="Axe" name="Weapon" value="Axe" />
        <label for="Axe">Axe</label>

        <input type="radio" id="Sword" name="Weapon" value="Sword" />
        <label for="Sword">Sword</label>

        <input type="radio" id="Wand" name="Weapon" value="Wand" />
        <label for="Wand">Wand</label>

        <input type="radio" id="Sandwich" name="Weapon" value="Sandwich" />
        <label for="Sandwich">Sandwich</label>
        </section>

        <section>
        <h2>Pick Your Supplies</h2>
        <input type="radio" id="Food" name="Supplies" value="Food" />
        <label for="Food">Food Stuffs</label>

        <input type="radio" id="CatPics" name="Supplies" value="CatPics" />
        <label for="CatPics">Cat Pictures</label>

        <input type="radio" id="Souls" name="Supplies" value="Souls" />
        <label for="Souls">Souls of the fallen</label>

        <input type="radio" id="YuGiOh" name="Supplies" value="YuGiOh" />
        <label for="YuGiOh">3 Blue Eyes White Dragon Cards</label>
        </section>

        <section>
        <h2>Pick Your ULTIMATE MOVE!!</h2>
        <input type="radio" id="MoonFall" name="ULT" value="MoonFall" />
        <label for="MoonFall">Moon Fall</label>

        <input type="radio" id="DuelWield" name="ULT" value="DuelWield" />
        <label for="DuelWield">Duel Wield God Weapon</label>

        <input type="radio" id="KAMEHAMEHA" name="ULT" value="KAMEHAMEHA" />
        <label for="KAMEHAMEHA">KAMEHAMEHA</label>

        <input type="radio" id="Summon" name="ULT" value="Summon" />
        <label for="Summon"> Actually summon 3 Blue Eyes White Dragon</label>
        </section>

        <section>
        <h2>Pick Your WAR CRY!!</h2>
        <input type="radio" id="WEASEL" name="WARCRY" value="WEASEL" />
        <label for="WEASEL">I am WEASEL!!</label>

        <input type="radio" id="Having" name="WARCRY" value="Having" />
        <label for="Having">I'll Have What She's Having!!</label>

        <input type="radio" id="World" name="WARCRY" value="World" />
        <label for="World">Star Platinum, THE WARLDO!!</label>

        <input type="radio" id="Leroy" name="WARCRY" value="Leroy" />
        <label for="Leroy">LEEROY JENKIIIIIIIIIINS!!</label>
        </section>

        <button type="submit">{sheet ? "Update" : "SUMMON!!"}</button>
      </form>
    </div>
  );
}
