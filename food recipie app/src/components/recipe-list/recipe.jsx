import React from 'react'
import {Link} from 'react-router-dom'
import './recipe.css'
const RecipeItem = ({item}) => {
  
  console.log(item)
  return (
    <div className='parent'>
    <div className='container'>
      <div className='content'>
        <img className='img' src={item?.image_url} alt='recipe item'/>

      </div>
      <span className='publisher'>{item?.publisher}</span>
      <h3 className='title'>{item?.title}</h3>
      <Link className='btn' to={`/details/${item.id}`}>Recipe Details</Link>
    </div>
    </div>
  )
}

export default RecipeItem
