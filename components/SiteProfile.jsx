import React from 'react';
import axios from 'axios';
import config from '../config.json';
import SiteRule from './SiteRule.jsx'

class SiteProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            site: null
        }
        const siteName = this.props.match.params.siteName;
        axios.get(`${config.apiURL}/site/${siteName}`)
        .then(response => response.data[0])
        .then(result => {
            this.setState({site: result})
        });
    }

    render() {
        const site = this.state.site;
        return (
            <div>
                {
                    site ?
                    <div>
                        <h3>Password Rules for '{site.site}'</h3>
                        {
                            site.rules.map(rule => <SiteRule rule={rule} />)
                        }
                    </div>

                    :
                    <div></div>
                }
            </div>
        )
    }
}

export default SiteProfile;