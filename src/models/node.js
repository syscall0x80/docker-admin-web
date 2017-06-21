
import { getNodes } from '../services/node';
import {parse} from 'qs';

export default {
  namespace: 'node',
  state: {
    nodes: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/node') {
          dispatch({
            type: 'getNodes',
          });
        }
      });
    },
  },
  effects: {
    *getNodes ({
      payload
    }, {call, put}) {
      const data = yield call(getNodes, parse(payload));
      yield put({type: 'getNodesSuccess', payload: {...data}})
    },
  },
  reducers: {
    getNodesSuccess (state, action) {
      return Object.assign({}, state, {
        nodes: action.payload.data,
      });
    },
  }
}
