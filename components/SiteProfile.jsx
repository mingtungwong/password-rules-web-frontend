import React from 'react';
import axios from 'axios';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import config from '../config.json';
import SiteRule from './SiteRule.jsx'

class SiteProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            site: null
        }

        this.setEditSite = this.setEditSite.bind(this);

        const siteName = this.props.match.params.siteName;
        axios.get(`${config.apiURL}/site/${siteName}`)
        .then(response => response.data[0])
        .then(result => {
            this.setState({site: result})
        });
    }

    setEditSite() {
        this.props.setSiteToEdit(this.state.site);
        this.props.history.push({pathname: `/edit`});
    }

    render() {
        const site = this.state.site;
        return (
            <div>
                <MuiThemeProvider>
                {
                    site ?
                    <div>
                        <h3>Password Rules for "{site.site}"</h3>
                        {
                            site.rules.map(rule => <SiteRule rule={rule} />)
                        }
                        <RaisedButton
                            label="Edit"
                            onClick={this.setEditSite}
                        />
                    </div>
                    :
                    <div></div>
                }
                </MuiThemeProvider>
            </div>
        )
    }
}

export default SiteProfile;