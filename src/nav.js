import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar( props ){

    const justImg = props.logo1;
    return(
        <div className="homePage">
            <nav>
                <img src={justImg} alt="Pepe Rocky Logo"></img>
                <ul>
                    <Link to={"/home"}><li><h3>Home</h3></li></Link>
                    <Link to={"/about"}><li><h3>About</h3></li></Link>
                    <Link to={"/tokeno"}><li><h3>Tokenomics</h3></li></Link>
                    <Link to={"/rmap"}><li><h3>Roadmap</h3></li></Link>
                    <Link to={"/contact"}><li><h3>Contact</h3></li></Link> 
                </ul>
                <button>Buy $PEPER</button>
                <span className="menuBtn">

                </span>
            </nav>
        </div>
    )
}