import { applyMiddleware  , combineReducers } from 'redux';
import {configureStore} from "@reduxjs/toolkit";
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import { alertsReducer } from './reducers/alertsReducer';
import { bookingsReducer } from './reducers/bookingsReducer';
import { carsReducer } from './reducers/carsReducer';

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
   alertsReducer,
   bookingsReducer,
   carsReducer,
})

const store = configureStore(
  {reducer: rootReducer},
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store