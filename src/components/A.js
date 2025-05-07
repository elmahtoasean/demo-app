import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";

export default function A() {
  
  const [loading, setloading] = useState(false)
  const params = useParams();
  console.log(params);

  useEffect(() => {
    if(params.mealname.length > 0){
      setloading(true)
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.mealname}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.meals) {
            const filtered = data.meals.filter(meal =>
              meal.strMeal.toLowerCase().includes(params.mealname.toLowerCase())
            );
            console.log(filtered);
          } else {
            console.log([]);
          }
        });
        setloading(false)
    }
  },[params])

  return (
    <div>
      {
        loading ? <h1>Loading...</h1> : <h1>{params.mealname}</h1>
      }
    </div>
  )
}
