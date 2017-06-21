import { getImages } from '../services/image';
import {parse} from 'qs';

export default {
  namespace: 'image',
  state: {
    images: [],
  },
  subscriptions: {
  },
  effects: {
    *getImages ({
                    payload
                  }, {call, put}) {
      const data = yield call(getImages, parse(payload));
      yield put({type: 'getImagesSuccess', payload: {...data}})
    },
  },
  reducers: {
    getImagesSuccess (state, action) {
      return Object.assign({}, state, {
        images: action.payload.data,
      });
    },
  }
}
