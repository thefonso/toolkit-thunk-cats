import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCats = createAsyncThunk(
    "gallery/getCats",
    async () => {
        const response = await fetch("https://api.thecatapi.com/v1/breeds?limit=10")
        const data = await response.json()
        return data
    }
)

export const catSlice = createSlice({
    name: "gallery",
    initialState: {
        breeds: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCats.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCats.fulfilled, (state, action) => {
                state.breeds = action.payload
                state.isLoading = false
            })
            .addCase(getCats.rejected, (state) => {
                state.isLoading = false
            })
    }
})

export default catSlice.reducer