import { request } from '../utils'

export const getNetworks = async (params) => {
  return request('/networks', {
    method: 'get',
  });
};

export const getNetwork = async (params) => {
  return request(`/network/${params.id}`, {
    method: 'get',
  });
};

export const newNetwork = async (params) => {
  return request('/network/new', {
    method: 'POST',
    body: JSON.stringify(params)
  });
};
