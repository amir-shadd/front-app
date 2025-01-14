import React from 'react'
import "./Map.css"

function Map() {
  return (
    <div className='map-container rtl'>
        <div className="margin-box">
            <div className="map">
                <h1>با ما تماس بگیرید</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103515.62790078815!2d50.86781547425414!3d35.82782776055269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dbf95ef45f011%3A0x722a04e54eba9bcd!2sKaradsch%2C%20Alborz%2C%20Iran!5e0!3m2!1sde!2sde!4v1736768165438!5m2!1sde!2sde" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Map