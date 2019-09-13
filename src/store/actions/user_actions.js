import axios from 'axios';

import { USER_SERVER, PRODUCT_SERVER } from '../../components/utils/misc';

import {
   LOGIN_USER,
   REGISTER_USER,
   AUTH_USER,
   LOGOUT_USER,
   ADD_TO_CART_USER,
   GET_CART_ITEMS_USER,
   REMOVE_CART_ITEM_USER,
   ON_SUCCESS_BUY_USER,
   UPDATE_DATA_USER,
   CLEAR_UPDATE_USER_DATA,
} from './types';

export const loginUser = dataToSubmit => {
   return axios.post(`${USER_SERVER}/login`, dataToSubmit).then(response => ({
      type: LOGIN_USER,
      payload: response.data,
   }));
};

export const registerUser = dataToSubmit => {
   return axios
      .post(`${USER_SERVER}/register`, dataToSubmit)
      .then(response => ({
         type: REGISTER_USER,
         payload: response.data,
      }));
};

export const auth = () => {
   return axios.get(`${USER_SERVER}/auth`).then(response => ({
      type: AUTH_USER,
      payload: response.data,
   }));
};

export const logoutUser = () => {
   return axios.get(`${USER_SERVER}/logout`).then(response => ({
      type: LOGOUT_USER,
      payload: response.data,
   }));
};

export const addToCart = _id =>
   axios.post(`${USER_SERVER}/addToCart?productId=${_id}`).then(response => ({
      type: ADD_TO_CART_USER,
      payload: response.data,
   }));

export const getCartItems = (cartItems, userCart) =>
   axios
      .get(`${PRODUCT_SERVER}/articles_by_id?id=${cartItems}&type=array`)
      .then(response => {
         userCart.forEach(item =>
            response.data.forEach((resItem, i) => {
               if (item.id === resItem._id)
                  response.data[i].quantity = item.quantity;
            })
         );

         return {
            type: GET_CART_ITEMS_USER,
            payload: response.data,
         };
      });

export const removeCartItem = id =>
   axios.get(`${USER_SERVER}/removeFromCart?_id=${id}`).then(response => {
      response.data.cart.forEach(item =>
         response.data.cartDetail.forEach((resItem, i) => {
            if (item.id === resItem._id)
               response.data.cartDetail[i].quantity = item.quantity;
         })
      );

      return {
         type: REMOVE_CART_ITEM_USER,
         payload: response.data,
      };
   });

export const onSuccessBuy = data =>
   axios.post(`${USER_SERVER}/successBuy`, data).then(response => ({
      type: ON_SUCCESS_BUY_USER,
      payload: response.data,
   }));

export const updateUserData = dataToSubmit =>
   axios.post(`${USER_SERVER}/update_profile`, dataToSubmit).then(response => ({
      type: UPDATE_DATA_USER,
      payload: response.data,
   }));

export const clearUpdateUser = () => ({
   type: CLEAR_UPDATE_USER_DATA,
   payload: '',
});
