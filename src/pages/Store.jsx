import { useContext, useEffect, useState } from "react";
import { ItemContext } from "../context/ItemContext";
import Item from "../components/Item/Item";
import "./CSS/Store.css";

const Store = () => {
  const items = useContext(ItemContext);
  const [filter, setFilter] = useState("");
  const [specificWeaponFilter, setSpecificWeaponFilter] = useState("");
  const [rarityFilter, setRarityFilter] = useState("");
  const [wearFilter, setWearFilter] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const [buttonFilter, setButtonFilter] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 220) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSpecificWeaponChange = (e) => {
    setSpecificWeaponFilter(e.target.value);
  };

  const handleRarityChange = (e) => {
    setRarityFilter(e.target.value);
  };

  const handleWearChange = (e) => {
    setWearFilter(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Establecer la categoría activa
    setSpecificWeaponFilter(""); // Reiniciar el filtro de arma cuando cambie la categoría
  };

  const handleButtonFilter = () => {
    setButtonFilter(!buttonFilter);
  };

  const filteredItems = items

    .filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
    .filter((item) => {
      if (specificWeaponFilter === "" && activeCategory === "pistol") {
        return [
          "Glock-18",
          "USP-S",
          "P2000",
          "P250",
          "Dual Berettas",
          "Tec-9",
          "CZ75-Auto",
          "Five-SeveN",
          "Desert Eagle",
          "R8 Revolver",
        ].includes(item.weapon.name);
      }

      if (specificWeaponFilter === "" && activeCategory === "smg") {
        return [
          "MAC-10",
          "MP9",
          "MP7",
          "MP5-SD",
          "UMP-45",
          "P90",
          "PP-Bizon",
        ].includes(item.weapon.name);
      }

      if (specificWeaponFilter === "" && activeCategory === "rifle") {
        return [
          "Galil AR",
          "FAMAS",
          "AK-47",
          "M4A4",
          "M4A1-S",
          "SSG 08",
          "SG 553",
          "AUG",
          "AWP",
          "G3SG1",
          "SCAR-20",
        ].includes(item.weapon.name);
      }

      if (specificWeaponFilter === "" && activeCategory === "heavy") {
        return [
          "Nova",
          "XM1014",
          "Sawed-Off",
          "MAG-7",
          "M249",
          "Negev",
        ].includes(item.weapon.name);
      }

      if (specificWeaponFilter === "" && activeCategory === "knife") {
        return [
          "Bayonet",
          "Bowie Knife",
          "Butterfly Knife",
          "Classic Knife",
          "Falchion Knife",
          "Flip Knife",
          "Gut Knife",
          "Huntsman Knife",
          "Karambit",
          "Kukri Knife",
          "M9 Bayonet",
          "Navaja Knife",
          "Nomad Knife",
          "Paracord Knife",
          "Shadow Daggers",
          "Skeleton Knife",
          "Stiletto Knife",
          "Survival Knife",
          "Talon Knife",
          "Ursus Knife",
        ].includes(item.weapon.name);
      }

      if (specificWeaponFilter === "" && activeCategory === "gloves") {
        return [
          "Bloodhound Gloves",
          "Broken Fang Gloves",
          "DriverGloves",
          "Hand Wraps",
          "Hydra Gloves",
          "Moto Gloves",
          "Specialist Gloves",
          "Sport Gloves",
        ].includes(item.weapon.name);
      }

      return specificWeaponFilter
        ? item.weapon.name === specificWeaponFilter
        : true;
    })
    .filter((item) => (rarityFilter ? item.rarity.name === rarityFilter : true))
    .filter((item) =>
      wearFilter ? item.wear && item.wear.name === wearFilter : true
    )
    .slice(0, 100); // Limita a los primeros 12 items

  return (
    <div className="store">
      <h1>TPB STORE</h1>
      <hr />
      <div className="store__filters">
        {/* Filtros comunes */}
        <input
          style={{ display: isVisible ? "block" : "none" }}
          type="text"
          placeholder="Search for item name"
          value={filter}
          onChange={handleFilterChange}
        />
        <button
          style={{ display: isVisible ? "block" : "none" }}
          className="store__filters__filter"
          onClick={() => handleButtonFilter("filter")}
        >
          Filter
        </button>

        {buttonFilter && (
          <div className="store__buttons">
            <button
              className="all-button"
              onClick={() => handleCategoryClick("all")}
            >
              All
            </button>
            <button onClick={() => handleCategoryClick("pistol")}>
              Pistols
            </button>
            <button onClick={() => handleCategoryClick("smg")}>SMGs</button>
            <button onClick={() => handleCategoryClick("rifle")}>Rifles</button>
            <button onClick={() => handleCategoryClick("heavy")}>Heavy</button>
            <button onClick={() => handleCategoryClick("knife")}>Knives</button>
            <button onClick={() => handleCategoryClick("gloves")}>
              Gloves
            </button>

            {/* Mostrar select basado en la categoría seleccionada */}
            {activeCategory === "pistol" && (
              <select
                value={specificWeaponFilter}
                onChange={handleSpecificWeaponChange}
              >
                <option value="">All Pistols</option>
                <option value="Glock-18">Glock-18</option>
                <option value="USP-S">USP-S</option>
                <option value="P2000">P2000</option>
                <option value="P250">P250</option>
                <option value="Dual Berettas">Dual Berettas</option>
                <option value="Tec-9">Tec-9</option>
                <option value="CZ75-Auto">CZ75-Auto</option>
                <option value="Five-SeveN">Five-SeveN</option>
                <option value="Desert Eagle">Desert Eagle</option>
                <option value="R8 Revolver">R8 Revolver</option>
              </select>
            )}

            {activeCategory === "smg" && (
              <select
                value={specificWeaponFilter}
                onChange={handleSpecificWeaponChange}
              >
                <option value="">All SMGs</option>
                <option value="MAC-10">MAC-10</option>
                <option value="MP9">MP9</option>
                <option value="MP7">MP7</option>
                <option value="MP5-SD">MP5-SD</option>
                <option value="UMP-45">UMP-45</option>
                <option value="P90">P90</option>
                <option value="PP-Bizon">PP-Bizon</option>
              </select>
            )}

            {activeCategory === "rifle" && (
              <select
                value={specificWeaponFilter}
                onChange={handleSpecificWeaponChange}
              >
                <option value="">All Rifles</option>
                <option value="Galil AR">Galil AR</option>
                <option value="FAMAS">FAMAS</option>
                <option value="AK-47">AK-47</option>
                <option value="M4A4">M4A4</option>
                <option value="M4A1-S">M4A1-S</option>
                <option value="SSG 08">SSG 08</option>
                <option value="SG 553">SG 553</option>
                <option value="AUG">AUG</option>
                <option value="AWP">AWP</option>
                <option value="G3SG1">G3SG1</option>
                <option value="SCAR-20">SCAR-20</option>
              </select>
            )}

            {activeCategory === "heavy" && (
              <select
                value={specificWeaponFilter}
                onChange={handleSpecificWeaponChange}
              >
                <option value="">All</option>
                <option value="Nova">Nova</option>
                <option value="XM1014">XM1014</option>
                <option value="Sawed-Off">Sawed-Off</option>
                <option value="MAG-7">MAG-7</option>
                <option value="M249">M249</option>
                <option value="Negev">Negev</option>
              </select>
            )}

            {activeCategory === "knife" && (
              <select
                value={specificWeaponFilter}
                onChange={handleSpecificWeaponChange}
              >
                <option value="">Select a Knife</option>
                <option value="Bayonet">Bayonet</option>
                <option value="Bowie Knife">Bowie</option>
                <option value="Butterfly Knife">Butterfly</option>
                <option value="Classic Knife">Classic</option>
                <option value="Falchion Knife">Falchion</option>
                <option value="Flip Knife">Flip</option>
                <option value="Gut Knife">Gut</option>
                <option value="Huntsman Knife">Huntsman</option>
                <option value="Karambit">Karambit</option>
                <option value="Kukri Knife">Kukri</option>
                <option value="M9 Bayonet">M9 Bayonet</option>
                <option value="Navaja Knife">Navaja</option>
                <option value="Nomad Knife">Nomad</option>
                <option value="Paracord Knife">Paracord</option>
                <option value="Shadow Daggers">Daggers</option>
                <option value="Skeleton Knife">Skeleton</option>
                <option value="Stiletto Knife">Stiletto</option>
                <option value="Survival Knife">Survival</option>
                <option value="Talon Knife">Talon</option>
                <option value="Ursus Knife">Ursus</option>
              </select>
            )}

            {activeCategory === "gloves" && (
              <select
                value={specificWeaponFilter}
                onChange={handleSpecificWeaponChange}
              >
                {/* GLOVES */}
                <option value="">Select a Glove</option>
                <option value="Bloodhound Gloves">Bloodhound</option>
                <option value="Broken Fang Gloves">Broken Fang</option>
                <option value="Driver Gloves">Driver</option>
                <option value="Hand Wraps">Hand Wraps</option>
                <option value="Hydra Gloves">Hydra</option>
                <option value="Moto Gloves">Moto</option>
                <option value="Specialist Gloves">Specialist</option>
                <option value="Sport Gloves">Sport</option>
              </select>
            )}

            <select value={rarityFilter} onChange={handleRarityChange}>
              <option value="">All Rarities</option>
              <option value="Consumer Grade">Consumer Grade</option>
              <option value="Industrial Grade">Industrial Grade</option>
              <option value="Mil-Spec Grade">Mil-Spec</option>
              <option value="Restricted">Restricted</option>
              <option value="Classified">Classified</option>
              <option value="Covert">Covert</option>
              <option value="Extraordinary">Extraordinary</option>
              <option value="Contraband">Contraband</option>
            </select>
            <select value={wearFilter} onChange={handleWearChange}>
              <option value="">All Wears</option>
              <option value="Factory New">Factory New</option>
              <option value="Minimal Wear">Minimal Wear</option>
              <option value="Field-Tested">Field-Tested</option>
              <option value="Well-Worn">Well-Worn</option>
              <option value="Battle-Scarred">Battle-Scarred</option>
            </select>
          </div>
        )}
      </div>
      <div className="products">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <Item key={item.id} item={item} />)
        ) : (
          <p>No items available</p>
        )}
      </div>
    </div>
  );
};

export default Store;
