import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import EditRule from './EditRule.jsx';

class SiteCreationPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            site: "",
            rules: []
        }
        this.onSiteTextChange = this.onSiteTextChange.bind(this);
        this.onAddRule = this.onAddRule.bind(this);
        this.updateRules = this.updateRules.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    onSiteTextChange(text) {
        this.setState({site: text});
    }

    onAddRule() {
        let rules = this.state.rules;
        rules.push(null);
        this.setState({rules: rules});
    }

    updateRules(id, rule) {
        console.log(id, rule);
    }

    cancelEdit(index) {
        const rules = this.state.rules;
        rules.splice(index, 1);
        this.setState({rules});
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div className="addSitePage">
                        <div>
                            <TextField
                                floatingLabelText="Site Name"
                                onChange={this.onSiteTextChange}
                            />
                        </div>
                        <div>
                            <RaisedButton
                                label="Add Rule"
                                onClick={this.onAddRule}
                            />
                        </div>
                        <div>
                            {
                                this.state.rules.map((element, idx) => <EditRule key={idx} index="idx" callback={this.updateRules} cancel={this.cancelEdit}/>)
                            }
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default SiteCreationPage;