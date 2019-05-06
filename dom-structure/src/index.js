import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import '@contentful/forma-36-react-components/dist/styles.css';
import '@contentful/forma-36-fcss/dist/styles.css';
import { init } from 'contentful-ui-extensions-sdk';
import './style/index.css';
import { components } from './config/defaultConfig';

import App from './containers/App';


const initialState = {
    dom: [
        {
            type : 'section',
            name : 'Example',
            model : 'BasicLayout',
            specs : ['background'],
            components : []
        }
    ]
};

const store = createStore(rootReducer, initialState);


init(extension => {
    ReactDOM.render(
        <Provider store={store}>
          <App extension={extension} store={store} />
        </Provider>,
        document.getElementById('root')
  );
});
