import React from 'react';
import axios from 'axios';
import config from '../config.json'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

import ResultLinks from './ResultLinks.jsx'

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: null
        }
        this.findSearchResults(this.props);
    }

    findSearchResults(props) {
        const site = props.match.params.site;
        axios.get(`${config.apiURL}/site/${site}`)
        .then(response => response.data)
        .then(sites => this.setState({results: sites}))
    }
    
    componentWillReceiveProps(props) {
        this.findSearchResults(props);
    }

    render() {
        return (
            <div>
                {
                    this.state.results ?
                    <ResultLinks results={this.state.results} />
                    :
                    <MuiThemeProvider>
                        <CircularProgress />
                    </MuiThemeProvider>
                }
            </div>
        )
    }
}

export default SearchResults;