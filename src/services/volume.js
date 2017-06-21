import { request } from '../utils'

export const getVolumes = async (params) => {
  return request('/volumes', {
    method: 'get',
  });
};

export const getVolume = async (params) => {
  return request(`/volume/${params.id}`, {
    method: 'get',
  });
};

export const newVolume = async (params) => {
  return request('/volume/new', {
    method: 'POST',
    body: JSON.stringify(params)
  });
};
