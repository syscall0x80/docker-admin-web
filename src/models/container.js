import pathToRegexp from 'path-to-regexp';
import { getContainers, getContainer, runContainer } from '../services/container';

export default {
  namespace: 'container',
  state: {
    containers: [],
    runContainer: null,
    editContainer: null,
    detailContainer: null,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/container' || pathname === '/container/') {
          dispatch({
            type: 'getContainers',
          });
        }
        let match = pathToRegexp('/container/edit/:id').exec(pathname);
        if (match) {
          const id = match[1];
          dispatch({
            type: 'getContainer',
            payload: { id },
          })
        }
        match = pathToRegexp('/container/detail/:id').exec(pathname);
        if (match) {
          const id = match[1];
          dispatch({
            type: 'detailContainer',
            payload: { id },
          })
        }
      });
    },
  },
  effects: {

    *getContainers ({
      payload
    }, {call, put}) {
      const data = yield call(getContainers, payload);
      yield put({type: 'getContainersSuccess', payload: {...data}});
    },

    *getContainer ({
      payload
    }, {call, put}) {
      const data = yield call(getContainer, payload);
      yield put({type: 'getContainerSuccess', payload: {...data}});
    },

    *detailContainer ({
                     payload
                   }, {call, put}) {
      const data = yield call(getContainer, payload);
      yield put({type: 'detailContainerSuccess', payload: {...data}});
    },

    *runContainer ({
      payload
    }, {call, put}) {
      const data = yield call(runContainer, payload);
      yield put({ type: 'runContainerSuccess', payload: { ...data}});
    },
  },
  reducers: {
    getContainersSuccess (state, action) {
      return Object.assign({}, state, {
        containers: action.payload.data,
      });
    },
    getContainerSuccess (state, action) {
      return Object.assign({}, state, {
        editContainer: action.payload.data,
      });
    },
    detailContainerSuccess (state, action) {
      return Object.assign({}, state, {
        detailContainer: action.payload.data,
      });
    },
    runContainerSuccess (state, action) {
      return Object.assign({}, state, {
        runContainer: action.payload.data,
      })
    }
  }
}
