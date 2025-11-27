import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type { Rating } from "../../types/ratingType";

export type RateObj = {
    id: number;
    data: Array<Rating>;
}
interface RatingsState {
    data: Array<RateObj>;
}

const INITIAL_STATE: RatingsState = {
    data: []
}

export const ratingsSlice = createSlice({
    name: 'ratings',
    initialState: INITIAL_STATE,
    reducers: {
        setData: (state, action: PayloadAction<RateObj>) => {
            state.data.push(action.payload);
        }
    }
})

export const {setData} = ratingsSlice.actions;
export default ratingsSlice.reducer;