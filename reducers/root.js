import { combineReducers } from 'redux';

import editRulesReducer from './editRulesReducer';
import editSiteReducer from './editSiteReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    editRules: editRulesReducer,
    editSite: editSiteReducer,
    search: searchReducer
});