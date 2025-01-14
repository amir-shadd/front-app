import React from 'react'
import "./Gallery.css"

function Gallery() {
  return (
    <div className='Gallery rtl'>
        <div className="G-container">
            <h1>نمونه کارها ما را بررسی کنید</h1>
            <hr />
            <div className="album">
                <div className="pics">
                    <img src="./portfolio-1.jpg" alt="" />
                </div>
                <div className="pics">
                    <img src="./portfolio-2.jpg" alt="" />
                </div >
                <div className="pics">
                    <img src="./portfolio-4.jpg" alt="" />
                </div>
                <div className="pics">
                    <img src="./portfolio-5.jpg" alt="" />
                </div>
                <div className="pics">
                    <img src="./portfolio-3.jpg" alt="" />
                </div>
            </div>
            <div className="album">
                <div className="pics">
                    <img src="./portfolio-1.jpg" alt="" />
                </div>
                <div className="pics">
                    <img src="./portfolio-2.jpg" alt="" />
                </div >
                <div className="pics">
                    <img src="./portfolio-5.jpg" alt="" />
                </div>
                <div className="pics">
                    <img src="./portfolio-4.jpg" alt="" />
                </div>
                <div className="pics">
                    <img src="./portfolio-3.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery