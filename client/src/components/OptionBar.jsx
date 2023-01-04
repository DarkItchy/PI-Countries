import React from "react";
import { useDispatch } from "react-redux";
import { filterByActivityS, filterByContinent } from "../actions";


const OptionBar = () => {
    
    const dispatch = useDispatch();
    
    const handleFilterByContinent = (e) => {
        dispatch(filterByContinent(e.target.value))
    };

    const handleFilterByActivityS = (e) => {
        dispatch(filterByActivityS(e.target.value))
    };
    
    return (
        <div>
            <h3>Ordenar</h3>
            Alfabeticamente:
            <select title="Alfabeticamente">
                <option value={"ASC"}>A-Z</option>
                <option value={"DES"}>Z-A</option>
            </select>
            Población:
            <select title="Población">
                <option value={"MAY"}>Mayor</option>
                <option value={"MEN"}>Menor</option>
            </select>
            <h3>Filtrar</h3>
            Continente:
            <select onChange={e => handleFilterByContinent(e)} title="Continente">
                <option value={"ALL"}>Todos</option>
                <option value={"Africa"}>Africa</option>
                <option value={"Americas"}>America</option>
                <option value={"Asia"}>Asia</option>
                <option value={"Europe"}>Europa</option>
                <option value={"Oceania"}>Oceania</option>
            </select>
            <h5>Actividad:</h5>
            Estación:
            <select onChange={e => handleFilterByActivityS(e)} title="Estación">
                <option value={"ALL"}>Todos</option>
                <option value={"Primavera"}>Primavera</option>
                <option value={"Verano"}>Verano</option>
                <option value={"Otoño"}>Otoño</option>
                <option value={"Invierno"}>Invierno</option>
            </select>
            Dificultad:
            <select title="Dificultad">
                <option value={"ALL"}>Todos</option>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
                <option value={"5"}>5</option>
            </select>
        </div>
    )
};

export default OptionBar;