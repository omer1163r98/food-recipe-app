import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Favorite from './pages/favorites/favorite';
import Details from './pages/details/details';

function App() {
  const [searchParam, setSearchParam] = useState('')
  const [loading, setLoading] = useState(false);
  const [recipieList, setRecipieList] = useState('')
  const [details, setDetails] = useState(null)
  const [favorites, setFavorites] = useState([])
  const [favNumber, setFavNumber] = useState(0)
  const [animation, setAnimation] = useState(false)

  return (
    <>
      <div className=''>
        <Navbar searchParam={searchParam} setSearchParam={setSearchParam} loading={loading} setLoading={setLoading} recipieList={recipieList} setRecipieList={setRecipieList} />
        <Routes>
          <Route path='/' element={<Home recipieList={recipieList} loading={loading}/>}></Route>
          <Route path='/favorites' element={<Favorite favorites = {favorites} setFavorites = {setFavorites} />}></Route>
          <Route path='/details/:id' element={<Details details={details} setDetails={setDetails} favorites = {favorites} setFavorites = {setFavorites} favNumber={favNumber} setFavNumber={setFavNumber}/>}></Route>
        </Routes>
      </div>

    </>
  )
}

export default App
