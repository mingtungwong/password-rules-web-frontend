import React from 'react';
import axios from 'axios';
import _ from 'lodash';

import config from '../config.json';
import { validateRules } from '../utilities/inputValidation';
import { mapRuleValuesToString } from '../utilities/rulesMapper';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import EditRuleContainer from './EditRuleContainer.jsx';

const ruleChoices = ["Minimum", "Maximum", "Range", "No"];
const categoryChoices = ["Numbers", "Lowercase Letters", "Uppercase Letters", "Characters", "Special Characters", "Spaces", "Non-Letter Characters"];

class SiteCreationPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            site: "",
            rules: props.rules,
            error: null,
            submitDisabled: false
        }

        this.onSiteTextChange = this.onSiteTextChange.bind(this);
        this.submit = this.submit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        if(this.props.match.params.siteName) this.setState({site: this.props.match.params.siteName});
    }

    componentWillReceiveProps(newProps) {
        const siteName = newProps.match.params.siteName;
        const newState = {rules: newProps.rules};
        if(siteName && !this.isDifferentRules(this.state.rules, newProps.rules)) newState.site = siteName;
        this.setState(newState);
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

    isDifferentRules(original, newRules) {
        let maximum = Math.max(original.length, newRules.length);
        
        for(let i = 0; i < maximum; i++) {
            if(!_.isEqual(original[i], newRules[i])) return true;
        }

        return false;
    }

    onSubmit() {
        this.setState({submitDisabled: true}, this.submit);
    }

    submit() {
        const body = {};
        body.site = this.state.site.length ? this.state.site : 'x';
        body.rules = this.state.rules.map(mapRuleValuesToString);


        axios.get(`${config.apiURL}/valid/${body.site}`)
        .then(res => res.data)
        .then(results => {
            if(results.alive) {
                if(validateRules(this.state.rules)) {
                    axios.post(`${config.apiURL}/site`, body)
                    .then((response) => {
                        this.props.resetRules();
                        this.props.history.push({pathname: `/site/${this.state.site}`});
                    })
                }
                else {
                    const newState = {submitDisabled: false};
                    newState.error = this.state.rules.length ? 'rules' : 'noRules';
                    this.setState(newState);
                }
            }
            else {
                this.setState({error: "site", submitDisabled: false});
            }
        })
    }

    render() {

        const siteErrorText = 'The site is invalid';
        const noRulesErrorText = 'There must be at least one rule';
        const rulesErrorText = 'There are errors in the rules';
        const error = this.state.error;

        return (
            <div>
                <MuiThemeProvider>
                    <div className="addSitePage">
                        {
                            error ?
                            (
                                <div className="errorText">
                                    {
                                            error === "site"
                                            ? siteErrorText
                                            : error === "noRules"
                                                ? noRulesErrorText
                                                : rulesErrorText 
                                    }
                                </div>
                            )
                            : null
                        }
                        <div>
                            <TextField
                                floatingLabelText="Site Name"
                                floatingLabelFixed={true}
                                onChange={this.onSiteTextChange}
                                value={this.state.site}
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
                                    />)
                                })
                            }
                        </div>
                        <div className="submitButton">
                            <RaisedButton
                                label="Submit"
                                onClick={this.onSubmit}
                                disabled={this.state.submitDisabled}
                            />
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default SiteCreationPage;