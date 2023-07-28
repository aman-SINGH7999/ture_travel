import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import heroimg1 from "../images/pexels-eberhard-grossgasteiger-443446.jpg"
import AboutUs from "./AboutUs";
import Footer from "./Footer";

const About = ()=>{
    return (
        <>
        <Navbar />
        <Hero 
        heroimg = {heroimg1}
        title = "About"
        cName = "hero-mid"
        text = ""
        url = "/"
        btnClass = "btnClass btn-hide"
        btnText = "Travel Plane" />
        <AboutUs />
        <Footer />
        </>
    )
}
export default About