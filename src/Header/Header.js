import React from 'react'
import './Header.css'
import Navbar from './Navbar'
import Card from '../Card/Card'

function Header() {
  return (
    <div className='Header-container'>
        <Navbar></Navbar>
        <div className="heroText">
            <h1>راه حل های قدرتمند دیجیتال با <br />
             <span>Kasuka</span>
            </h1>
            <h2>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</h2>
        </div>
        <div className='card-container'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
    </div>
  )
}

export default Header