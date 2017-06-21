import './index.html';
import 'babel-polyfill';
import dva from 'dva';
import createLogger from 'redux-logger';
import createLoading from 'dva-loading';
import { browserHistory } from 'dva/router';
import router from './router';

const logger = createLogger();

// 1. Initialize
const app = dva({
  ...createLoading({effects: true}),
  history: browserHistory,
  onError (error) {
    console.error('app onError -- ', error)
  }
});

app.use({
  onAction: logger,
});


// 2. Model move to router
// app.model(model);

// 3. Router
app.router(router);

// 4. Start
app.start('#root');
