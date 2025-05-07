import React from 'react'

export default function ItemCard({item}) {
    return (
        <div className="card">
            <img
                src={item.strMealThumb}
                alt={item.strMeal}
                style={{ borderRadius: '10px' }}
            />
            <h3>{item.strMeal}</h3>
            <p>{item.strInstructions}</p>
        </div>
    )
}
