

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './details.css'

const Details = ({details, setDetails, favorites, setFavorites, favNumber, setFavNumber}) => {
    const {id} = useParams()

    useEffect (() => {
        async function getRecipeDetails () {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
            const data = await res.json()
            console.log(data)
            if (data?.data) {
                setDetails(data?.data)
            }
        }
        getRecipeDetails()
    }, [])

    function addToFavorite(getCurrentItem) {
        console.log(getCurrentItem);
        let copyFavoritesList = [...favorites]
        const index = copyFavoritesList.findIndex(item => item.id === getCurrentItem.id);

        if (index === -1){
            copyFavoritesList.push(getCurrentItem)
            setFavNumber(prev => prev + 1)
        }else{
            copyFavoritesList.splice(index,1)
            setFavNumber(prev => prev - 1)
        }
        setFavorites(copyFavoritesList)
    }
    console.log(favorites);
  return (
    
    <div className='container-details'>
        <div className='fav'>{favNumber}</div>
    <div>
      <div>

      <div>
      <h2 className='title'>{details?.recipe?.title}</h2>
        <h3 className='publisher-dtl'>{details?.recipe?.publisher}</h3>
      </div>

        <div className='image'>
            <img src={details?.recipe?.image_url}/>

        </div>
      </div>


      <div>
        <button onClick={() => addToFavorite(details?.recipe)} className='favorite-btn'>
            {
                favorites.findIndex(item => item.id === details?.recipe?.id) !== -1 ? "Remove from favorites" : "Add to favorites"
            }
        </button>
      </div>
    </div>
    <div>
      <div className='ingredients'>Ingredients</div>
      <ul className='list-details'>
        {
            details?.recipe?.ingredients.map(ingredient => <li className='list-item'>
                <span>{ingredient.quantity} {ingredient.unit} {ingredient.description}</span>
            </li>)
        }
      </ul>
    </div>
    </div>
  )
}

export default Details
