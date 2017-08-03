import React from 'react';
import axios from 'axios';

import config from '../config.json';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import EditRuleContainer from './EditRuleContainer.jsx';

const ruleChoices = ["Minimum", "Maximum", "Range", "No"];
const categoryChoices = ["Numbers", "Capital Letters", "Characters", "Special Characters", "Spaces"];

class SiteCreationPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            site: "",
            rules: props.rules,
            error: false
        }

        this.onSiteTextChange = this.onSiteTextChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({rules: newProps.rules});
    }

    onSiteTextChange(event, value) {
        this.setState({site: value});
    }

    ruleMapper(rule) {
        const obj = {};
        obj.rule = ruleChoices[rule.rule];
        obj.category = categoryChoices[rule.category];
        obj.quantity = rule.quantity;
        return obj;
    }

    submit() {
        const body = {};
        body.site = this.state.site;
        body.rules = this.state.rules.map(this.ruleMapper);
        axios.post(`${config.apiURL}/site`, body)
        .then((response) => {
            this.props.resetRules();
            this.props.history.push({pathname: `/site/${this.state.site}`});
        })
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div className="addSitePage">
                        {
                            this.state.error ?
                            (
                                <div className="errorText">
                                    The site must be filled in
                                </div>
                            )
                            : null
                        }
                        <div>
                            <TextField
                                floatingLabelText="Site Name"
                                floatingLabelFixed={true}
                                onChange={this.onSiteTextChange}
                            />
                        </div>
                        <div className="addRuleButton">
                            <RaisedButton
                                label="Add Rule"
                                onClick={this.props.addRule}
                            />
                        </div>
                        <div>
                            {
                                this.state.rules.map((element, idx) => {     
                                    return (
                                    <EditRuleContainer
                                        key={element.id}
                                        id={element.id}
                                        rule={element.rule}
                                        category={element.category}
                                        quantity={element.quantity}
                                        error={element.error}
                                    />)
                                })
                            }
                        </div>
                        <div className="submitButton">
                            <RaisedButton
                                label="Submit"
                                onClick={this.submit}
                            />
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default SiteCreationPage;