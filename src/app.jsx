import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
import Main from './components/Main';
import store, {history} from './store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

ReactDOM.render(
      <Provider store = {store}>
          <ConnectedRouter history={history}>
               <Main/>
          </ConnectedRouter>
      </Provider>
     ,
    document.getElementById('app')
)


