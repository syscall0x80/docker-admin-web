import pathToRegexp from 'path-to-regexp';
import { getVolumes, getVolume, newVolume } from '../services/volume';

export default {
  namespace: 'volume',
  state: {
    volumes: [],
    newVolume: null,
    editVolume: null,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/volume') {
          dispatch({
            type: 'getVolumes',
          });
        }
        let match = pathToRegexp('/volume/edit/:id').exec(pathname);
        if (match) {
          const id = match[1];
          dispatch({
            type: 'getVolume',
            payload: { id },
          })
        }
      });
    },
  },
  effects: {
    *getVolumes ({
                    payload
                  }, {call, put}) {
      const data = yield call(getVolumes, payload);
      yield put({type: 'getVolumesSuccess', payload: {...data}});
    },

    *getVolume ({
                   payload
                 }, {call, put}) {
      const data = yield call(getVolume, payload);
      yield put({type: 'getVolumeSuccess', payload: {...data}});
    },

    *newVolume ({
                   payload
                 }, {call, put}) {
      const data = yield call(newVolume, payload);
      yield put({ type: 'newVolumeSuccess', payload: { ...data}});
    },
  },
  reducers: {
    getVolumesSuccess (state, action) {
      return Object.assign({}, state, {
        volumes: action.payload.data,
      });
    },
    getVolumeSuccess (state, action) {
      return Object.assign({}, state, {
        editVolume: action.payload.data,
      });
    },
    newVolumeSuccess (state, action) {
      return Object.assign({}, state, {
        newVolume: action.payload.data,
      })
    }
  }
}

