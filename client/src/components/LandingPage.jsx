import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage () {
    return(
    <div className="LandingPage">
        <h1>Bienvenidos a conocer el mundo</h1>
        <Link to={"/home"}>
            <button>Descubrir</button>
        </Link>
    </div>)
};