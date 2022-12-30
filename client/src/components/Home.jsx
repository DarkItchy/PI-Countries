import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions";
import Card from "./Card";
import OptionBar from "./OptionBar";

const Home = () => {
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.countries);

    useEffect(() => {
        dispatch(actions.getCountries())
    },[]);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(actions.getCountries());
    }

    return (
        <div>
            <h1>Za wārudo</h1>
            <Link to={"/activity"}>Crear actividad</Link>
            <button onClick={e => {handleClick(e)}}>
                Cargar todos los países
            </button>
            <OptionBar/>
            {allCountries?.map( c => {
                return (
                    <Fragment key={c.id}>
                    <Link to={`/country${c.id}`}>
                        <Card img={c.img} name={c.name} continent={c.continent} id={c.id} />
                    </Link>
                    </Fragment>
                );
            })}
        </div>
    )
};

export default Home;