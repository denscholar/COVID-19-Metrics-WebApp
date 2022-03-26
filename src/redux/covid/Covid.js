// constants or action types
export const GET_COUNTRIES_CASES = 'covid-19-metrics-webapp/country/GET_COUNTRIES_CASES';
export const GET_GLOBAL_CASE = 'covid-19-metrics-webapp/country/GET_GLOBAL_CASE';
const SEARCH_COUNTRY_DATA = 'covid-19-metrics-webapp/country/SEARCH_COUNTRY_DATA';

// action creators. Create two actions to handle the types created above
// get countries action
export const getCountryCases = (countries) => ({
  type: GET_COUNTRIES_CASES,
  payload: countries,
});

export const fetchGlobalCase = (payload) => ({
  type: GET_GLOBAL_CASE,
  payload,
});

export const searchCountryData = (payload) => ({
  type: SEARCH_COUNTRY_DATA,
  payload,
});

// Create the reducers for each action
const getCountryReducer = (state = [], action) => {
  switch (action.type) {
    case GET_COUNTRIES_CASES:
      return [...state, ...action.payload];
    case SEARCH_COUNTRY_DATA:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const fetchGlobalCaseReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_GLOBAL_CASE:
      return { ...action.payload };
    default:
      return state;
  }
};

export { getCountryReducer, fetchGlobalCaseReducer };
