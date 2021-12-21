import { createStore } from 'redux';
import { cakeReducer } from './CakeReducers';

export const store = createStore(cakeReducer);
