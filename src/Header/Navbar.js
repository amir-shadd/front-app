import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
        <div className='container top-fixed'>
            <navbar className='navbar'>
                    <a href="" className='button'> شروع </a>

                <ul className='navbar-links'>
                    <li><a href="#">تماس با ما</a></li>
                    <li><a href="#">لیست کشویی</a></li>
                    <li><a href="#">تیم</a></li>
                    <li><a href="#">نمونه کارها</a></li>
                    <li><a href="#">خدمات</a></li>
                    <li><a href="#">درباره ما</a></li>
                    <li><a href="#" className='home'>خانه</a></li>
                </ul>

                <div className='logo'>
                    <a href="#" className='logoName'>
                        KASUKA
                    </a>
                    <a href="#"><img src="https://theme-script.ir/templates/kasuka/assets/img/logo.png" alt="logo" className='imgLogo' /></a>
                </div>
            </navbar>
        </div>
  )
}

export default Navbar