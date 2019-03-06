import { combineReducers } from 'redux';
import cardReducer from './card';
import { connectRouter } from 'connected-react-router';

export default history => combineReducers({
    router: connectRouter(history),
    card: cardReducer
});
