import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import root from './root';

export default createStore(root, applyMiddleware(logger, thunk));