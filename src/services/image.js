import { request } from '../utils'

export async function getImages (params) {
  return request('/images', {
    method: 'get',
    data: null
  });
}
