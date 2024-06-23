// src/components/CategoryList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsArrowRightShort } from "react-icons/bs";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => setCategories(response.data.categories))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        )
        .then((response) => setMeals(response.data.meals))
        .catch((error) => console.error("Error fetching meals:", error));
    }
  }, [selectedCategory]);

  return (
    <div className="p-6 bg-white text-center">
      <h5 className="text-1xl font-bold mb-2">Shop by Category</h5>
      <h2 className="text-3xl font-bold mb-10">Top Category Of Organic Food</h2>
      <div className="mx-12 flex justify-center flex-wrap space-x-4 mb-10">
        {categories.map((category) => (
          <button
            key={category.idCategory}
            className={`px-4 py-2 rounded-full mb-2 ${
              selectedCategory === category.strCategory
                ? "bg-olive text-white"
                : "bg-grey"
            }`}
            onClick={() => setSelectedCategory(category.strCategory)}
          >
            {category.strCategory}
          </button>
        ))}
      </div>
      <div className="mx-18 text-left grid grid-cols-1 md:grid-cols-2 gap-6">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="flex items-center p-4 bg-white rounded shadow-md"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-24 h-24 object-cover rounded mr-4"
            />
            <div className="flex-grow"></div>
            <div className="flex text-right">
              <div className="flex-row text-left space-y-4">
                <h3 className="text-xl font-medium">{meal.strMeal}</h3>
                <p className="text-s text-gray-600">
                  Lorem ipsum dolor sit amet quam in lacus risus.
                </p>
              </div>
              <div className="flex-row space-y-5">
                <span className="text-xl text-olive font-medium">$8.45</span>
                <button className="flex items-center px-5 text-olive">
                  <span className="text-xs">SHOP NOW </span>
                  <span>
                    <BsArrowRightShort />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
