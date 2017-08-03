import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import root from './root';

export default createStore(root, applyMiddleware(ReduxThunk, logger));