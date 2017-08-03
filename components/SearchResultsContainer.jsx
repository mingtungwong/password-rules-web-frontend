import { connect } from 'react-redux';
import SearchResults from './SearchResults.jsx';

const mapStateToProps = (state) => {
    return {
        sites: state.search
    }
}

export default connect(mapStateToProps)(SearchResults);