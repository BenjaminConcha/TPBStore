import { useContext, useEffect, useState } from "react";
import { ItemContext } from "../../context/ItemContext";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import "./NewCollections.css";

const getRandomElements = (arr, num) => {
  const result = [];
  const arrCopy = [...arr];
  for (let i = 0; i < num; i++) {
    const randomIndex = Math.floor(Math.random() * arrCopy.length);
    result.push(arrCopy[randomIndex]);
    arrCopy.splice(randomIndex, 1);
  }
  return result;
};

const NewCollections = () => {
  const items = useContext(ItemContext);
  const [randomItems, setRandomItems] = useState([]);

  useEffect(() => {
    if (items.length > 0) {
      setRandomItems(getRandomElements(items, 8));
    }
  }, [items]);

  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {randomItems.length > 0 ? (
          randomItems.map((item) => <Item key={item.id} item={item} />)
        ) : (
          <p>No items available</p>
        )}
      </div>
      <Link className="magic-button__link" to={"/store"}>
        <button className="magic-button">More Skins</button>
      </Link>
    </div>
  );
};

export default NewCollections;
