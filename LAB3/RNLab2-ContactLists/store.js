import {createSlice, configureStore} from '@reduxjs/toolkit';
const contactSlice = createSlice({
    name: 'counter',
    initialState: {
        contacts: [],
        loading: false,
        error: false,
    },
    reducers: {
        fetchContactsLoading: (state, action) =>
        {
            state.loading = true;
            state.loading = false;
        },
        fetchContactsSucces: (state, action) =>
        {
            state.contacts = action.payload;
            state.loading = false;
            error.loading = false;
        },
        fetchContactsError: (state, action) =>
        {
            return ({
                ...state,
                loading: false,
                error: true,
            });
        },
    }
})
export const {fetchContactsLoading, fetchContactsSucces, fetchContactsError} =
contactSlice.actions;
export default Store = configureStore({
    reducer: contactSlice.reducer,
})