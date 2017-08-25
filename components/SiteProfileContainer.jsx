import { connect } from 'react-redux';

import SiteProfile from './SiteProfile.jsx';
import { setSite } from '../reducers/editSiteReducer';

const mapDispatchToProps = (dispatch) => {
    return {
        setSiteToEdit: (site) => dispatch(setSite(site))
    }
}

export default connect(null, mapDispatchToProps)(SiteProfile);