import React from 'react'
import {Link} from 'react-router-dom'
import BooksImage from '../assets/books-1.jpeg'
import '../styles/Home.css'

export const Home = () => {
  return (
    <div className='mainPage'
    style={{backgroundImage: `url(${BooksImage})`}}>
      <div className='order'>
        <Link to="/menu"/>
        <button>SATIN AL</button>
      </div>
    </div>
  )
}

