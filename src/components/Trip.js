import React from "react";
import './TripStyle.css'
import TripData from "./TripData";
import img1 from '../images/pexels-julian-jagtenberg-103123.jpg'
import img2 from '../images/pexels-matthew-montrone-1324803.jpg'
import img3 from '../images/pexels-david-bartus-2379653.jpg'

const Trip = ()=>{
    return (
        <>
        <div className="trip">
            <h1>Resent Trips</h1>
            <p>You can discover unique places using google maps</p>
            <div className="all-cards">
            <TripData
            img={img1}
            heading="This is card heading"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti provident commodi quis dolorem? Incidunt ipsum excepturi enim fugiat neque officia at quos in possimus! Mollitia quas iusto sapiente quae atque?" />
            <TripData
            img={img2}
            heading="This is card heading2"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti provident commodi quis dolorem? Incidunt ipsum excepturi enim fugiat neque officia at quos in possimus! Mollitia quas iusto sapiente quae atque?" />
            <TripData
            img={img3}
            heading="This is card heading3"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti provident commodi quis dolorem? Incidunt ipsum excepturi enim fugiat neque officia at quos in possimus! Mollitia quas iusto sapiente quae atque?" />
            </div>
        </div>
        </>
    )
}
export default Trip;