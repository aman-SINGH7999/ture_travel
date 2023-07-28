import React from "react";
import './FooterStyle.css'

const Footer = ()=>{
    return (
        <>
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Trippy</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <a href="/"><i className="fa-brands fa-facebook-square"></i></a>
                    <a href="/"><i className="fa-brands fa-instagram-square"></i></a>
                    <a href="/"><i className="fa-brands fa-behance-square"></i></a>
                    <a href="/"><i className="fa-brands fa-twitter-square"></i></a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>heading1</h4>
                    <a href="/">Link-1</a>
                    <a href="/">Link-2</a>
                    <a href="/">Link-3</a>
                    <a href="/">Link-4</a>
                </div>
                <div>
                    <h4>heading2</h4>
                    <a href="/">Link-1</a>
                    <a href="/">Link-2</a>
                    <a href="/">Link-3</a>
                    <a href="/">Link-4</a>
                </div>
                <div>
                    <h4>heading3</h4>
                    <a href="/">Link-1</a>
                    <a href="/">Link-2</a>
                    <a href="/">Link-3</a>
                    <a href="/">Link-4</a>
                </div>
                <div>
                    <h4>heading4</h4>
                    <a href="/">Link-1</a>
                    <a href="/">Link-2</a>
                    <a href="/">Link-3</a>
                    <a href="/">Link-4</a>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;