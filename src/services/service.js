import { request } from '../utils'

export async function getServices (params) {
  return request('/services', {
    method: 'get',
    data: null
  });
}
