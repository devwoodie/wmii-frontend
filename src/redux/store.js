import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userInfo'

export default configureStore({
    reducer: {
        user: userSlice,
    },
})