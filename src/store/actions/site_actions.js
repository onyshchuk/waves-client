import axios from 'axios';

import { SITE_SERVER } from '../../components/utils/misc';

import { GET_SITE_DATA, UPDATE_SITE_DATA } from './types';

export const getSiteData = () =>
   axios.get(`${SITE_SERVER}/site_data`).then(response => ({
      type: GET_SITE_DATA,
      payload: response.data,
   }));

export const updateSiteData = dataToSubmit =>
   axios.post(`${SITE_SERVER}/site_data`, dataToSubmit).then(response => ({
      type: UPDATE_SITE_DATA,
      payload: response.data,
   }));
