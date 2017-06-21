import { request } from '../utils'

export async function getNodes (params) {
  return request('/nodes', {
    method: 'get',
    data: null
  });
}
