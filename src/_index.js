import './index.html';
import 'babel-polyfill';
import dva from 'dva';
import createLoading from 'dva-loading';
import { browserHistory } from 'dva/router';
import router from './router';

// 1. Initialize
const app = dva({
  ...createLoading({effects: true}),
  history: browserHistory,
  onError (error) {
    console.error('app onError -- ', error)
  }
});

// 2. Model move to router
// app.model(model);

// 3. Router
app.router(router);

// 4. Start
app.start('#root');
