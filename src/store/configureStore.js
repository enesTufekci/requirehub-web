import { createStore, compose } from 'redux';

/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { devToolsEnhancer } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

const configureStore = () => {
  let enhancers = [];

  if (process.env.NODE_ENV === 'development') {
    enhancers = [
      devToolsEnhancer(),
      ...enhancers,
    ];
  }

  const store = createStore(
    rootReducer,
    compose(...enhancers),
  )

  return store;
}

export default configureStore;
