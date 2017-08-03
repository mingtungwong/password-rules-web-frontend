import { combineReducers } from 'redux';

import editRulesReducer from './editRulesReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    editRules: editRulesReducer,
    search: searchReducer
});