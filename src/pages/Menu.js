import React from "react";
import "../styles/Menu.css";

function Menu({ pizzaList }) {
  console.log("pizzalist", pizzaList);
  return (
    <div className="menu">
      <h1> Menu Item</h1>
      <div>
        <ul className="menuitem">
          {pizzaList.map((pizza, key) => {
            return (
              <li className="container" key={key}>
                <h2>{pizza.name}</h2>
                <div>
                  <img src={pizza.image} alt="" />
                </div>
                <div className="price">€{pizza.price}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Menu;
