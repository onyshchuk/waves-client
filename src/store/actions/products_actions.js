import axios from 'axios';

import { PRODUCT_SERVER } from '../../components/utils/misc';

import {
   GET_PRODUCTS_BY,
   GET_BRANDS,
   ADD_BRAND,
   GET_WOODS,
   ADD_WOOD,
   GET_PRODUCTS_TO_SHOP,
   ADD_PRODUCT,
   CLEAR_PRODUCT,
   GET_PRODUCT_DETAIL,
   CLEAR_PRODUCT_DETAIL,
} from './types';

export const getProductDetail = id =>
   axios
      .get(`${PRODUCT_SERVER}/articles_by_id?id=${id}&type=single`)
      .then(response => ({
         type: GET_PRODUCT_DETAIL,
         payload: response.data[0],
      }));

export const clearProductDetail = () => ({
   type: CLEAR_PRODUCT_DETAIL,
   payload: '',
});

export const getProductBy = sortCriteria =>
   axios
      .get(
         `${PRODUCT_SERVER}/articles?sortBy=${sortCriteria}&order=desc&limit=4`
      )
      .then(response => ({
         type: GET_PRODUCTS_BY,
         payload: response.data,
         sortCriteria,
      }));

export const getProductsToShop = (
   skip,
   limit,
   filters = [],
   previousState = []
) => {
   const data = { limit, skip, filters };
   return axios.post(`${PRODUCT_SERVER}/shop`, data).then(response => {
      let newState = [...previousState, ...response.data.articles];
      return {
         type: GET_PRODUCTS_TO_SHOP,
         payload: { size: response.data.size, articles: newState },
      };
   });
};

export const addProduct = dataToSubmit =>
   axios.post(`${PRODUCT_SERVER}/article`, dataToSubmit).then(response => ({
      type: ADD_PRODUCT,
      payload: response.data,
   }));

export const clearProduct = () => ({
   type: CLEAR_PRODUCT,
   payload: '',
});

//===========================================
//                 CATEGORIES
//===========================================

export const getBrands = () =>
   axios.get(`${PRODUCT_SERVER}/brands`).then(response => ({
      type: GET_BRANDS,
      payload: response.data,
   }));

export const addBrand = (dataToSubmit, existingBrands) =>
   axios.post(`${PRODUCT_SERVER}/brand`, dataToSubmit).then(response => {
      let brands = [...existingBrands, response.data.brand];

      return {
         type: ADD_BRAND,
         payload: { success: response.data.success, brands },
      };
   });

export const getWoods = () =>
   axios.get(`${PRODUCT_SERVER}/woods`).then(response => ({
      type: GET_WOODS,
      payload: response.data,
   }));

export const addWood = (dataToSubmit, existingWoods) =>
   axios.post(`${PRODUCT_SERVER}/wood`, dataToSubmit).then(response => {
      let woods = [...existingWoods, response.data.wood];

      return {
         type: ADD_WOOD,
         payload: { success: response.data.success, woods },
      };
   });
