import React from "react";
import "./Tori.css";

const Tori = () => {
  return (
    <div className="tori">
      <input type="text" value="Hakusana ja/tai postinumero" />
      <select name="what">
        <option id="1">Kaikki osastot</option>
      </select>
      <select name="where">
        <option id="1">Koko Suomi</option>
      </select>
      <input type="checkbox" name="how" />
      Myydään
      <input type="checkbox" name="how" />
      Ostetaan
      <input type="checkbox" name="how" />
      Vuokrataan
      <input type="checkbox" name="how" />
      Halutaan vuokrata
      <input type="checkbox" name="how" />
      Annetaan Tallenna haku
      <button className="haeButton">Hae</button>
    </div>
  );
};

export default Tori;
