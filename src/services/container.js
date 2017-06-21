import { request } from '../utils'

export const getContainers = async (params) => {
  return request('/containers', {
    method: 'get',
  });
};

export const getContainer = async (params) => {
  return request(`/container/${params.id}`, {
    method: 'get',
  });
};

export const runContainer = async (params) => {
  return request('/container/run', {
    method: 'POST',
    body: JSON.stringify(params)
  });
};
