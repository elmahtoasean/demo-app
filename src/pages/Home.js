import React, { useState, useEffect } from 'react';
import Category from '../components/Category';
import './Home.css'; 
import {Helmet} from "react-helmet";
import ItemCard from '../components/ItemCard';

function Home(props) {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');

  console.log(props)

  const fetchingFunction = () => 
  {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => response.json())
      .then((data) => 
      {
        setData(data.categories);
        console.log(data.categories);
      }
    );
  };

  useEffect(() => 
  {
    if (searchText.trim() !== '') 
    {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then((response) => response.json())
        .then((data) => 
        {
          if (data.meals) 
          {
            const filtered = data.meals.filter(meal =>
              meal.strMeal.toLowerCase().includes(searchText.toLowerCase())
            );
            setData(filtered);
          } 
          else 
          {
            setData([]);
          }
        }
        );
    } 
    else 
    {
      fetchingFunction();
    }
  }, [searchText]);

  return (
    <div className="home-container">
      <Helmet>
        <title>MealDB</title>
        <meta name="description" content="Search for your favorite meal" />
        <meta name="keywords" content="meal, food, recipe, search" />
        <meta name="author" content="Elmah Elmah and Elmah" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <h1>MealDB</h1>
      <h2>Search for your favorite meal</h2>
      <input
        type="text"
        placeholder="Search for a meal"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="meal-search-input"
      />

      <div className="grid-container">
        {data.map((item, index) => {
          if (item.strCategory) {
            return <Category key={item.idCategory || index} category={item} />;
          } else {
            return (
              <ItemCard item = {item} key={index} /> // Pass the item to ItemCard component
            );
          }
        })}
      </div>
    </div>
  );
}

export default Home;
