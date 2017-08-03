import { connect } from 'react-redux';
import EditRule from './EditRule.jsx';
import { editRule, deleteRule } from '../reducers/editRulesReducer';

const mapDispatchToProps = (dispatch) => {
    return {
        editRule: (rule) => dispatch(editRule(rule)),
        deleteRule: (ruleId) => dispatch(deleteRule(ruleId))
    }
}

export default connect(null, mapDispatchToProps)(EditRule);