import pathToRegexp from 'path-to-regexp';
import { getNetworks, getNetwork, newNetwork } from '../services/network';

export default {
  namespace: 'network',
  state: {
    networks: [],
    newNetwork: null,
    editNetwork: null,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/network') {
          dispatch({
            type: 'getNetworks',
          });
        }
        let match = pathToRegexp('/network/edit/:id').exec(pathname);
        if (match) {
          const id = match[1];
          dispatch({
            type: 'getNetwork',
            payload: { id },
          })
        }
      });
    },
  },
  effects: {
    *getNetworks ({
                      payload
                    }, {call, put}) {
      const data = yield call(getNetworks, payload);
      yield put({type: 'getNetworksSuccess', payload: {...data}});
    },

    *getNetwork ({
                     payload
                   }, {call, put}) {
      const data = yield call(getNetwork, payload);
      yield put({type: 'getNetworkSuccess', payload: {...data}});
    },

    *newNetwork ({
                     payload
                   }, {call, put}) {
      const data = yield call(newNetwork, payload);
      yield put({ type: 'newNetworkSuccess', payload: { ...data}});
    },
  },
  reducers: {
    getNetworksSuccess (state, action) {
      return Object.assign({}, state, {
        networks: action.payload.data,
      });
    },
    getNetworkSuccess (state, action) {
      return Object.assign({}, state, {
        editNetwork: action.payload.data,
      });
    },
    newNetworkSuccess (state, action) {
      return Object.assign({}, state, {
        newNetwork: action.payload.data,
      })
    }
  }
}
