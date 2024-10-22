/* eslint-disable react/prop-types */
import "./Item.css";

const Item = ({ item }) => {
  const handleClick = () => {
    const baseURL = "https://steamcommunity.com/market/listings/730/";
    const hashName = encodeURIComponent(item.market_hash_name);
    window.open(`${baseURL}${hashName}`, "_blank");
  };

  return (
    <div className="item-container">
      <div className="item">
        <h3>{item.name}</h3>
        <p className="rarity" style={{ color: item.rarity.color }}>
          Rarity : {item.rarity.name}
        </p>
        <div
          className="item__img"
          style={{
            boxShadow: `inset  0 0px 70px -10px  ${item.rarity.color}`,
          }}
        >
          <img onClick={handleClick} src={item.image} alt={item.name} />
        </div>
        <p className="item__float">
          Min Float: {item.min_float} - Max Float: {item.max_float}
        </p>
        <p className="item__price">$ 3.99</p>
      </div>
    </div>
  );
};

export default Item;
