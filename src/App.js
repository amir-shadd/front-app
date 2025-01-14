import React from "react";
import "./Header/App.css"
import Header from "./Header/Header";
import Article from "./Article/Article";
import Logoalbom from "./Logoalbom/Logoalbom";
import Article2 from "./Article2/Article2";
import Box from "./Box/Box";
import Midle from "./Midle/Midle";
import Gallery from "./Gallery/Gallery";
import Article3 from "./Article3/Article3";
import Testimonial from "./Testimonial/Testimonial";
import Map from "./Map/Map";
import Tamrin from "./Tamrin";


function App() {
  return (
    <div className="main-container">
    <Header/>
    <Article/>
    <Logoalbom/>
    <Article2/>  
    <Box/>
    <Midle/> 
    <Gallery/> 
    <Article3/>
    <Testimonial/>
    <Map/>
    {/* <Tamrin name = "amirhosein"></Tamrin>
    <Tamrin name = "arash"></Tamrin>
    <Tamrin name = "mohamad"></Tamrin> */}
    </div>
  );
}

export default App;
