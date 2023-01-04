import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail } from "../actions";
import { useEffect } from "react";

const CountryDetail = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountryDetail(props.match.params.id));
    }, [dispatch])

    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt="Imagen no encontrada" width={"200px"} height={"250px"} />
            <h3>{id}</h3>
            <h2>{continent}</h2>
            <h2>{capital}</h2>
            <h2>{subregion}</h2>
            <h2>{area}</h2>
            <h2>{population}</h2>
            <h2>{activities}</h2>
        </div>
    )
};

export default CountryDetail;