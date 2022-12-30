import React from "react";

const OptionBar = () => {
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
            <select title="Continente">
                <option value={"AFR"}>Africa</option>
                <option value={"AME"}>America</option>
                <option value={"ASI"}>Asia</option>
                <option value={"EUR"}>Europa</option>
                <option value={"OCE"}>Oceania</option>
            </select>
            <h5>Actividad:</h5>
            Estación:
            <select title="Estación">
                <option value={"PRI"}>Primavera</option>
                <option value={"VER"}>Verano</option>
                <option value={"OTO"}>Otoño</option>
                <option value={"INV"}>Invierno</option>
            </select>
            Dificultad:
            <select title="Dificultad">
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