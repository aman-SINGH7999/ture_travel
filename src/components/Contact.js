import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import heroimg1 from "../images/pexels-david-bartus-2379653.jpg"
import ContectUs from "./ContactUs";
import Footer from "./Footer";

const Contact = ()=>{
    return (
        <>
        <Navbar />
        <Hero 
        heroimg = {heroimg1}
        title = "Contect"
        cName = "hero-mid"
        text = ""
        url = "/"
        btnClass = "btnClass btn-hide"
        btnText = "Travel Plane" />
        <ContectUs />
        <Footer />
        </>
        
    )
}
export default Contact