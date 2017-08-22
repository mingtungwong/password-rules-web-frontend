import { connect } from 'react-redux';
import SiteCreationPage from './SiteCreationPage.jsx';
import { addRule, resetRules } from '../reducers/editRulesReducer';

const mapStateToProps = (state) => {
    console.log(state);
    return {
        rules: state.editRules
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRule: () => dispatch(addRule()),
        resetRules: () => dispatch(resetRules())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteCreationPage);