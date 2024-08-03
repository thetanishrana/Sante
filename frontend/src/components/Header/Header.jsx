import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
            <h2>Find your next meal</h2>
                <p>We offer a range of curated meals with a focus on their macros and nutrient profile.</p>
                <button>Explore</button>
            </div>
        </div>
    )
}

export default Header
