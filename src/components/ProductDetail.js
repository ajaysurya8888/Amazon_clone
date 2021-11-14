import React ,{useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {selectedProduct} from '../actions/productActions';
const ProductDetails= () => {
  const {productId} = useParams();
  
  let product = useSelector((state) => state.product);
  const {  title, image, price, category, description } = product;
  console.log(product);
  
  
const dispatch = useDispatch();

  const fetchsingleProduct = async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err) => {
      console.log(err);
    });
    console.log(response.data);
    dispatch(selectedProduct(response.data));
  };
  
  
  useEffect( ()=>{
    if (productId && productId !== "") {
    //eslint-disable-next-line
fetchsingleProduct(productId) ;
    }// eslint-disable-next-line
  },[productId]);
 
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt = "images" />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <p className="ui teal tag label">${price}</p>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

};

export default ProductDetails