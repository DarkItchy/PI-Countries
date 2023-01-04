import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {getCountries} from "../actions";
import Card from "./Card";
import OptionBar from "./OptionBar";
import Paginated from "./Paginated";

const Home = () => {
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.countries);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(9.99);
    const lastCountry = currentPage * countriesPerPage;
    const firstCountry = lastCountry - countriesPerPage;
    const currentCountries = allCountries.slice(firstCountry, lastCountry);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getCountries())
    },[]);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getCountries());
    }

    return (
        <div>
            <h1>Za wārudo</h1>
            <Link to={"/activity"}>Crear actividad</Link>
            <button onClick={e => {handleClick(e)}}>
                Cargar todos los países
            </button>
            <Paginated 
            countriesPerPage={countriesPerPage}
            allCountries={allCountries.length}
            paginado={paginado}
            />
            <OptionBar/>
            {currentCountries?.map( c => {
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