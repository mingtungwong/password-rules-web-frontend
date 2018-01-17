import { connect } from 'react-redux';
import { setSearchResults } from '../reducers/searchReducer';
import Navbar from './Navbar.jsx';
import axios from 'axios';
import config from '../config.json';

const mapDispatchToProps = (dispatch) => {
    return {
        getSearchResults : (query) => {
            return (dispatch) => {
                axios.get(`${config.apiURL}/search/${query}`)
                .then(res => res.data)
                .then(sites => dispatch(setSearchResults(sites)));
            }
        },
        dispatch: dispatch
    }
}

export default connect(null, mapDispatchToProps)(Navbar);
