import pathToRegexp from 'path-to-regexp';
import { getServices } from '../services/service'

export default {
  namespace: 'service',
  state: {
    services: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/service') {
          dispatch({
            type: 'getServices',
          });
        }
        let match = pathToRegexp('/service/edit/:id').exec(pathname);
        if (match) {
          const id = match[1];
          dispatch({
            type: 'getService',
            payload: { id },
          })
        }
      });
    },
  },
  effects: {
    *getServices ({
      payload
    }, {call, put}) {
      const data = yield call(getServices, payload);
      yield put({type: 'getServicesSuccess', payload: {...data}})
    },
  },
  reducers: {
    getServicesSuccess (state, action) {
      return Object.assign({}, state, {
        services: action.payload.data,
      });
    },
  }
}
