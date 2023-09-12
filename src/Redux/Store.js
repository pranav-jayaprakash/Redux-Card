import { configureStore } from "@reduxjs/toolkit";
import adderReducer from './DataSlice'

export default configureStore({
    reducer:{Collector:adderReducer}
})