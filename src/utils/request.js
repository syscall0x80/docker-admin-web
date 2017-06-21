import fetch from 'dva/fetch';
import { notification } from 'antd';
function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response.status >= 500) {
    notification.error({
      title: 'Oops!',
      description: 'error'
    })
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  return fetch(`http://localhost:5000${url}`, Object.assign(
    {},
    {
      headers: {
        'Content-Type': 'application/json'
      },
    },
    options,
  ))
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}
