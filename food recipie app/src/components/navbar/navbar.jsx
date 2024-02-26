import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './navbar.css'
const Navbar = ({searchParam, setSearchParam, loading, setLoading, recipieList, setRecipieList }) => {

    const navigate = useNavigate()
    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)

            const data = await res.json();

            if (data?.data?.recipes) {
                setRecipieList(data?.data?.recipes)
                setLoading(false)
                navigate('/')
            }
            setSearchParam('')

            console.log(data)
        } catch (error) {
            console.log(error)

        }
    }

    return (
        <nav className='nav'>
            <h2 className='logo'>
                
                    <NavLink className='logo-text' to={'/'}>Food Recepies</NavLink>
                
            </h2>
            <form onSubmit={handleSubmit} >
                <input
                    type='text'
                    name='search'
                    placeholder='Enter food name...'
                    className="search"
                    onChange={(e) => { setSearchParam(e.target.value) }}
                    value={searchParam}
                    
                    
                />
                
            </form>
            <ul className='list'>
                    <li>
                        <NavLink className='li' to={'/'}>Home</NavLink>
                    </li>

                    <li>
                        <NavLink className='li' to={'/favorites'}>Favorites</NavLink>
                    </li>

                </ul>
        </nav>
    )
}

export default Navbar
