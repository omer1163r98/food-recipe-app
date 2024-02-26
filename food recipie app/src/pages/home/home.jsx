

import React from 'react'
import RecipeItem from '../../components/recipe-list/recipe'

const Home = ({recipieList, loading}) => {
    console.log(recipieList)
    if (loading) return <div>Loading data...</div>
  return (
    <div className='parent' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      {
        recipieList && recipieList.length > 0 ? 
        recipieList.map(item => <RecipeItem
        item = {item} />)

        : <div style={{fontSize: '20px'}}> Nothing to Show. Search for a food</div>
      }
    </div>
  )
}

export default Home
