import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_cities_id = createAsyncThunk('', async () => {
    try {
                
        return {
            
        }
    } catch (error) {
        console.log(error);
    }
})