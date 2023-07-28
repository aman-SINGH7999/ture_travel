import React from "react";

const DestinationData = (props)=>{
    return (
        <>
        <div className={props.cName}>
            <div className="des-text">
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
            </div>
            <div className="des-image">
                <img src={props.img1} alt="Desc-Img1" />
                <img src={props.img2} alt="Desc-Img2" />
            </div>
        </div>
        </>
    )
}
export default DestinationData;