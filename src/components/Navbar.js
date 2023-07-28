import React from "react";
import './NavbarStyle.css'
import { ManuItems } from "./ManuItems";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    const [state,setState] = useState(true);
    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">ture-Travel</h1>
            <div className="menu-icons">
                <i onClick={()=>{setState(!state)}} className={state?"fas fa-bars":"fas fa-times"}></i>
            </div>
            <ul className={state?"nav-menu":"nav-menu active"}>
                {
                    ManuItems.map((items,index)=>{
                        return (<li key={index}><Link className={items.cName} to={items.url}><i className={items.icon}></i>{items.title}</Link></li>)
                    })
                }
                <button>Sign up</button>
            </ul>
        </nav>
    )
}

export default Navbar