import React from 'react';
import axios from 'axios';
import config from '../config.json'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

import ResultLinks from './ResultLinks.jsx'

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                {
                    this.props.sites ?
                    <div className="searchResults">
                        <h3>Search results for "{this.props.match.params.site}"</h3>
                        <ResultLinks results={this.props.sites} />
                    </div>
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