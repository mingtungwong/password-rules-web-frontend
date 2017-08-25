import { connect } from 'react-redux';
import EditSitePage from './EditSitePage.jsx';

const mapStateToProps = (state) => {
    return {
        site: state.editSite
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSitePage);