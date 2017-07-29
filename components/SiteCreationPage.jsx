import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import EditRule from './EditRule.jsx';
let ruleIdCounter = 0;

const ruleChoices = ["Minimum", "Maximum", "Range", "No"];
const categoryChoices = ["Numbers", "Capital Letters", "Characters", "Special Characters", "Spaces"];

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
        this.submit = this.submit.bind(this);
    }

    createDefaultRule() {
        const obj = {};
        obj.rule = "Minimum";
        obj.category = "Characters";
        obj.quantity = [];
        obj.id = ruleIdCounter++;
        return obj;
    }

    findRuleById(id) {
        const rules = this.state.rules;
        const length = rules.length;
        for(let i = 0; i < length; i++) {
            if(rules[i].id === id) return i;
        }
        return null;
    }

    onSiteTextChange(text) {
        this.setState({site: text});
    }

    onAddRule() {
        let rules = this.state.rules.slice();
        rules.push(this.createDefaultRule());
        this.setState({rules});
    }

    updateRules(rule) {
        const rules = this.state.rules.slice();
        rules[this.findRuleById(rule.id)] = rule;
        this.setState({rules});
    }

    cancelEdit(id) {
        const rules = this.state.rules.slice();
        rules.splice(this.findRuleById(id), 1);
        this.setState({rules});
    }

    submit() {

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
                        <div className="addRuleButton">
                            <RaisedButton
                                label="Add Rule"
                                onClick={this.onAddRule}
                            />
                        </div>
                        <div>
                            {
                                this.state.rules.map((element, idx) => {     
                                    return (
                                    <EditRule
                                        key={element.id}
                                        id={element.id}
                                        rule={element.rule}
                                        category={element.category}
                                        quantity={element.quantity}
                                        callback={this.updateRules}
                                        cancel={this.cancelEdit}
                                    />)
                                })
                            }
                        </div>
                        <div className="submitButton">
                            <RaisedButton
                                label="Submit"
                                oClick={this.submit}
                            />
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default SiteCreationPage;