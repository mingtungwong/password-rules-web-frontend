import { connect } from 'react-redux';
import SiteCreationPage from './SiteCreationPage.jsx';
import { addRule } from '../reducers/editRulesReducer';

const mapStateToProps = (state) => {
    return {
        rules: state.editRules
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRule: () => dispatch(addRule())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteCreationPage);