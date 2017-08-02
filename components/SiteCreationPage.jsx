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
            rules: [],
            error: false
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
        obj.error = null;
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

        let site = this.state.site + "";
        let rules = this.state.rules.slice();

        if(!site.length) {
            this.setState({error: true});
            return;
        }
        else this.setState({error: false});

        let length = rules.length;
        for(let i = 0; i < length; i++) {
            let rule = rules[i];
            let ruleChoice = ruleChoices[rule.rule];
            if(ruleChoice === "Minimum" || ruleChoice === "Maximum") {
                if(isNaN(+rule.quantity[0])) {
                    rule.error = "NaN";
                    this.setState({rules});
                    return
                }
            }
            else if(ruleChoice === "Maximum") {
                if(isNan(+rule.quantity[1])) {
                    rule.error = "NaN";
                    this.setState({rules});
                    return;
                }
            }
            else if(ruleChoice === "Range") {
                if(isNaN(rule.quantity[0]) || isNaN(rule.quantity[1])) {
                    rule.error = "NaN";
                    this.setState({rules});
                    return;
                }
                else if(rule.quantity[1] >= rule.quantity[0]) {
                    rule.error = "Range";
                    this.setState({rules});
                    return;
                }
                else {
                    rule.error = null;
                }
            }
        }
        this.setState({rules});
        console.log("No errors");
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
                                        error={element.error}
                                        callback={this.updateRules}
                                        cancel={this.cancelEdit}
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