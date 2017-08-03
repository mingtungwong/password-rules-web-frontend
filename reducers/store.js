import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import root from './root';

export default createStore(root, applyMiddleware(logger));