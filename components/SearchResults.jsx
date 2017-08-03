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
        return (
            <div>
                {
                    this.props.sites ?
                    <ResultLinks results={this.props.sites} />
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