import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Destination from "./Destination";
import heroimg1 from "../images/pexels-anand-dandekar-1532771.jpg";
import Trip from "./Trip";
import Footer from "./Footer";


const Home = ()=>{
    return (
        <>
        <Navbar />
        <Hero 
        heroimg = {heroimg1}
        title = "Welcome"
        cName = "hero"
        text = "Select your distation"
        url = "/"
        btnClass = "btnClass"
        btnText = "Travel Plane" />
        <Destination />
        <Trip />
        <Footer />
        </>
    )
}
export default Home