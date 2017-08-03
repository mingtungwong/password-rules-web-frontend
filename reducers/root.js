import { combineReducers } from 'redux';

import editRulesReducer from './editRulesReducer';

export default combineReducers({
    editRules: editRulesReducer
});