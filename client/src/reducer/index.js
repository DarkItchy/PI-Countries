const initialState = {
    countries: [],
    allCountries: [],
    detail: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COUNTRIES":
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            };

        case "FILTER_BY_CONTINENT":
            const allCountries = state.allCountries;
            const filterC = action.payload === "ALL" ? allCountries : allCountries.filter(el => el.continent === action.payload);
            return {
                ...state,
                countries: filterC
            };

        case "FILTER_BY_ACTIVITY_S":
            const allCountriesAS = state.allCountries;
            // const activities = allCountriesAS.map(el => el.activities);
            // const seasons = activities.map(el => el.map(e => e.season));
            // console.log(seasons);
            // const seasons = allCountriesAS.filter(el => el.activities.length !== 0);
            // console.log(seasons)
            const bucle = (param) => {
                const array = [];
                for (let i = 0; i < allCountriesAS.length; i++) {
                    for (let x = 0; x < allCountriesAS[i].activities.length; x++) {
                        let pais = allCountriesAS[i].activities[x];
                        if(pais.season === param) {array.push(allCountriesAS[i])};
                    }
                }
                return array;
            }
            const filterAS = action.payload === "ALL" ? allCountriesAS : bucle(action.payload) 
            console.log(filterAS)

            return {
                ...state,
                countries: filterAS
            };

        case "GET_COUNTRY_DETAIL":
            return {
                ...state,
                detail: {...action.payload}
            }

        default: return state
    }
};

export default rootReducer;
