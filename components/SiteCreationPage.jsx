import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import EditRuleContainer from './EditRuleContainer.jsx';
let ruleIdCounter = 0;

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

    onSiteTextChange(text) {
        this.setState({site: text});
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