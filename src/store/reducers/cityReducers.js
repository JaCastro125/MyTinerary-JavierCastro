import { createReducer } from "@reduxjs/toolkit";
import { get_cities, filter_cities } from "../actions/cityActions"

const initialState = {
    cities: []
}

const cityReducer = createReducer(initialState,
    (builder) => builder
        .addCase(get_cities.fulfilled, (state, action) => {
            return {
                ...state,
                cities: action.payload.cities
            }
        })
        .addCase(filter_cities.fulfilled, (state, action) => {
            return {
                ...state,
                cities: action.payload.cities
            }
        })
)

export default cityReducer;

