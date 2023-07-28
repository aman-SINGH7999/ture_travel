import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import heroimg1 from "../images/pexels-matthew-montrone-1324803.jpg"
import Footer from "./Footer";
import Trip from "./Trip";

const Service = ()=>{
    return (
        <>
        <Navbar />
        <Hero 
        heroimg = {heroimg1}
        title = "Services"
        cName = "hero-mid"
        text = ""
        url = "/"
        btnClass = "btnClass btn-hide"
        btnText = "Travel Plane" />
        <Trip />
        <Footer />
        </>
        
    )
}
export default Service