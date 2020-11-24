import axios from 'axios'
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';

import axiosMiddleware from 'redux-axios-middleware'

const defaultClient = axios.create({

  responseType: ['json'],
  

})


const store = createStore(
  reducers,
  applyMiddleware(
    axiosMiddleware(defaultClient),
  )
  

);
export default store;


