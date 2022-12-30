import axios from "axios";

export const getCountries = () => {
    return async function (dispatch) {
        var countries = await axios.get("http://localhost:3001/countries")
        return dispatch({
            type: "GET_COUNTRIES",
            payload: countries.data
        })
    };
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