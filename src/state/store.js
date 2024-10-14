import { configureStore } from '@reduxjs/toolkit'
import authAdminSlice from './Auth/authAdminSlice.jsx'
import authUserSlice from './Auth/authUserSlice.jsx'



export const store = configureStore({
    reducer: {
        userAdmin: authAdminSlice,
        user: authUserSlice,

    },
})

