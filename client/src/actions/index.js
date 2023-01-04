import axios from "axios";

export const getCountries = () => {
    return async function (dispatch) {
        let countries = await axios.get("http://localhost:3001/countries")
        return dispatch({
            type: "GET_COUNTRIES",
            payload: countries.data
        })
    };
};

export const filterByContinent = (payload) => {
    return {
        type: "FILTER_BY_CONTINENT",
        payload
    }
};

export const filterByActivityS = (payload) => {
    return {
        type: "FILTER_BY_ACTIVITY_S",
        payload
    }
};

export const getCountryDetail = (id) => {
    return async function (dispatch){
        let countriDetail = await axios.get(`http://localhost:3001/countries/${id}`);
        return dispatch({
            type: "GET_COUNTRY_DETAIL",
            payload: countriDetail.data
        })
    }
};

// export const getCountries = (payload) => {
//     return async function (dispatch) {
//         var countries = await axios.post("http://localhost:3001/countries", payload)
//         return dispatch({
//             type: "GET_COUNTRIES",
//             payload: countries.data
//         })
//     };
// };