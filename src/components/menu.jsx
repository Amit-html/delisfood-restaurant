import React, { useEffect, useState } from "react";
import '../styles/menu.css';
function Menu() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading menu...</h2>;

  return (
    <div className="menu-container">
      <h1>🍔 Our Menu</h1>
      <div className="menu-grid">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="menu-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3>
            <p>{meal.strCategory}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
