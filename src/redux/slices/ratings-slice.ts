import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type { Rating } from "../../types/ratingType";

interface RatingsState {
    data: Array<Rating>;
}

const INITIAL_STATE: RatingsState = {
    data: []
}

export const ratingsSlice = createSlice({
    name: 'ratings',
    initialState: INITIAL_STATE,
    reducers: {
        setData: (state, action: PayloadAction<Array<Rating>>) => {
            state.data = action.payload;
        }
    }
})

export const {setData} = ratingsSlice.actions;
export default ratingsSlice.reducer;