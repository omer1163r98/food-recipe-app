

import React from 'react';
import RecipeItem from '../../components/recipe-list/recipe';

const Favorite = ({favorites, setFavorites}) => {
  return (
    
    <div>
      {
        favorites && favorites.length > 0 ? 
        favorites.map(item => <RecipeItem item = {item}/>)

        : <div> Nothing is added in favorites</div>
      }
    </div>
  
  )
}

export default Favorite
