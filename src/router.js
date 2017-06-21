import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';

const cached = {};
const registerModel = (app, model) => {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1
  }
};

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Route path="/" getComponent={(location, cb) => {
        require.ensure([], require => {
          registerModel(app, require('./models/app'));
          cb(null, require('./routes/app'))
        })
      }}>
        <IndexRoute getComponent={(location, cb) => {
          require.ensure([], require => {
            registerModel(app, require('./models/dashboard'));
            cb(null, require('./routes/dashboard/index'))
          })
        }}/>
        <Route path='dashboard' getComponent={(location, cb) => {
          require.ensure([], require => {
            registerModel(app, require('./models/dashboard'));
            cb(null, require('./routes/dashboard/index'))
          })
        }}/>
        <Route path='service' getComponent={(location, cb) => {
          require.ensure([], require => {
            registerModel(app, require('./models/service'));
            cb(null, require('./routes/service/index'))
          })
        }}>
          <IndexRoute getComponent={(location, cb) => {
            require.ensure([], require => {
              registerModel(app, require('./models/service'));
              cb(null, require('./routes/service/List'))
            })
          }}/>
          <Route path='create' getComponent={(location, cb) => {
            require.ensure([], require => {
              registerModel(app, require('./models/service'));
              cb(null, require('./routes/service/Create'))
            })
          }}/>
          <Route path='edit/:id' getComponent={(location, cb) => {
            require.ensure([], require => {
              registerModel(app, require('./models/service'));
              cb(null, require('./routes/service/Edit'))
            })
          }}/>
        </Route>
        <Route path='node' getComponent={(location, cb) => {
          require.ensure([], require => {
            registerModel(app, require('./models/node'));
            cb(null, require('./routes/node/index'))
          })
        }}/>
        <Route path='container' getComponent={(location, cb) => {
          require.ensure([], require => {
            registerModel(app, require('./models/container'));
            cb(null, require('./routes/container/index'))
          })
        }}>
          <IndexRoute getComponent={(location, cb) => {
            require.ensure([], require => {
              registerModel(app, require('./models/container'));
              cb(null, require('./routes/container/List'))
            })
          }}/>
          <Route path='run' getComponent={(location, cb) => {
            require.ensure([], require => {
              registerModel(app, require('./models/container'));
              cb(null, require('./routes/container/Run'))
            })
          }}/>
          <Route path='edit/:id' getComponent={(location, cb) => {
            require.ensure([], require => {
              registerModel(app, require('./models/container'));
              cb(null, require('./routes/container/Edit'))
            })
          }}/>
          <Route path='detail/:id' getComponent={(location, cb) => {
            require.ensure([], require => {
              registerModel(app, require('./models/container'));
              cb(null, require('./routes/container/Detail'))
            })
          }}/>
        </Route>
        <Route path='image' getComponent={(location, cb) => {
          require.ensure([], require => {
            registerModel(app, require('./models/image'));
            cb(null, require('./routes/image/index'))
          })
        }}/>
        <Route path='network' getComponent={(location, cb) => {
          require.ensure([], require => {
            registerModel(app, require('./models/network'));
            cb(null, require('./routes/network/index'))
          })
        }}>
          <IndexRoute getComponent={(location, cb) => {
            require.ensure([], require => {
              registerModel(app, require('./models/network'));
              cb(null, require('./routes/network/List'))
            })
          }}/>
        </Route>
        <Route path='volume' getComponent={(location, cb) => {
          require.ensure([], require => {
            registerModel(app, require('./models/volume'));
            cb(null, require('./routes/volume/index'))
          })
        }}>
        <IndexRoute getComponent={(location, cb) => {
          require.ensure([], require => {
            registerModel(app, require('./models/volume'));
            cb(null, require('./routes/volume/List'))
          })
        }}/>
      </Route>
        <Route path='user' getComponent={(location, cb) => {
          require.ensure([], require => {
            registerModel(app, require('./models/user'));
            cb(null, require('./routes/user/users'))
          })
        }}/>
      </Route>
    </Router>
  );
}

export default RouterConfig;
