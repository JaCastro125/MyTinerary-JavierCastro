import { createReducer } from "@reduxjs/toolkit";
import { get_cities_id } from "../actions/detailActions"

const initialState = {
    cities_id: []
}

const detailReducer = createReducer(initialState,
    (builder) => builder
        .addCase(get_cities_id.fulfilled, (state, action) => {
            return {
                ...state,
                cities_id: action.payload.cities_id
            }
        })

)

export default detailReducer