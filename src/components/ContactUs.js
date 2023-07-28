import React from "react";
import './ContactUsStyle.css'

const ContectUs = ()=>{
    return (
        <>
        <div className="form-container">
           <h1>send a message to us!</h1> 
           <form action="" className="form">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea name="" id="" rows="4" placeholder="Message"></textarea>
                <button>Send Message</button>
           </form>
        </div>
        </>
    )
}
export default ContectUs;
