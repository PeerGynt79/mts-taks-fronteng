import {configureStore} from '@reduxjs/toolkit';
import tarifsReducer from './tarifs/tarifsSlice'

export default configureStore({
    reducer: {
        tarifs:tarifsReducer,
    }
});