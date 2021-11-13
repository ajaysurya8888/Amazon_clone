import React from 'react';
import { ActionTypes } from '../actions/actionTypes';


const initialState = {
    products : [{
        id : 1,
        title:"ajay",
        category:"investor",
    },], 
};
const productReducer = (state = initialState , {type,payload}) => {
  switch(type){
        case ActionTypes.SET_PRODUCTS:
          return state;
        default:
         return state;
  }
};

export default productReducer;