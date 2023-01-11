import "../styles/InstrumentItem.css";

function handleClick(instrumentName) {
  alert(`Vous voulez acheter 1 ${instrumentName}? Très bon choix`);
}
function InstrumentItem({ cover, name, price, category }) {
  return (
    <div className="box-instrument">
      <li className="lbm-instrument-item" onClick={() => handleClick}>
        <span className="lbm-instrument-item-price">{price}€</span>
        <img
          className="lbm-instrument-item-cover"
          src={cover}
          alt={`${name} cover`}
        />
        {name}
      </li>
    </div>
  );
}

export default InstrumentItem;
