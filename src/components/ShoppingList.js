import { useState } from "react";
import { instrumentList } from "../datas/instrumentList";
import InstrumentItem from "./InstrumentItem";
import Categories from "./Categories";
import "../styles/ShoppingList.css";

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = instrumentList.reduce(
    (acc, instrument) =>
      acc.includes(instrument.category) ? acc : acc.concat(instrument.category),
    []
  );

  function addToCart(name, price) {
    const currentInstrumentSaved = cart.find(
      (instrument) => instrument.name === name
    );
    if (currentInstrumentSaved) {
      //const cartFilteredCurrentInstrument = cart.filter(
      //  (instrument) => instrument.name !== name
     // );
      //Recupération de l'index de l'element
      const i = cart.indexOf(currentInstrumentSaved);

      const newcart = [...cart];
      newcart[i].amount = currentInstrumentSaved.amount + 1;
      updateCart(newcart);

      // updateCart([
      //     {name, price, amount: currentInstrumentSaved.amount + 1}
      // ])
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="lbm-shopping-list">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      <ul className="lbm-instrument-list">
        {instrumentList.map(({ id, cover, name, price, category }) =>
          !activeCategory || activeCategory === category ? (
            <div key={id}>
              <InstrumentItem
                cover={cover}
                name={name}
                price={price}
                category={category}
              />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
