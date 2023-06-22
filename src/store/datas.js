import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
    name: "rockets",
    initialState: {
        list: [],
        loading: false,
    },

    reducers: {
        rocketsRequested: (rockets, action) => {
            rockets.loading = true;
        },

        rocketsReceived: (rockets, action) => {
            rockets.list = action.payload;
            rockets.loading = false;
        },

        rocketsRequestFailed: (rockets, action) => {
            rockets.loading = false;
        },
    },
});

export default slice.reducer;

const { rocketsRequested, rocketsReceived, rocketsRequestFailed } =
    slice.actions;

const url = "rockets";

export const loadrockets = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            onStart: rocketsRequested.type,
            onSuccess: rocketsReceived.type,
            onError: rocketsRequestFailed.type,
        })
    );
};
