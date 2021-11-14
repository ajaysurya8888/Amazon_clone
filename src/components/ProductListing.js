import React ,{useEffect} from 'react';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import {useDispatch} from 'react-redux';
import {setProducts} from '../actions/productActions';
const ProductListing = () => {
const dispatch = useDispatch();
  const fetchProducts = async () =>{
    const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
      console.log(err);
    });
    dispatch(setProducts(response.data));
  };
  
  // eslint-disable-next-line
  useEffect(()=>{
    //eslint-disable-next-line
fetchProducts() // eslint-disable-next-line
  },[]);
  return (
    <div className ="ui grid container">
      <ProductComponent></ProductComponent>
    </div>
  );
};

export default ProductListing