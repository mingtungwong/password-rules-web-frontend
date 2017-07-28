import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const ruleChoices = ["Minimum", "Maximum", "Range", "No"];
const categoryChoices = ["Numbers", "Capital Letters", "Characters", "Special Characters", "Spaces"];


class EditRule extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ruleChoice: 0,
            ruleCategory: 0,
            quantity: []
        }
        this.handleRuleChange = this.handleRuleChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    handleRuleChange(event, index, value) {
        this.setState({ruleChoice: +value})
    }

    handleCategoryChange(event, index, value) {
        this.setState({ruleCategory: +value});
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div className="editMenu">
                        <div>
                            <DropDownMenu
                                value={this.state.ruleChoice}
                                onChange={this.handleRuleChange}
                                autoWidth={false}
                                className="ruleChoiceDropDown"
                            >
                            {
                                ruleChoices.map((choice, idx) => <MenuItem value={idx} primaryText={choice} />)
                            }
                            </DropDownMenu>
                        </div>
                        <div>
                            <DropDownMenu
                                value={this.state.ruleCategory}
                                onChange={this.handleCategoryChange}
                                autoWidth={false}
                                className="ruleCategoryDropDown"
                            >
                            {
                                categoryChoices.map((choice, idx) => <MenuItem value={idx} primaryText={choice} />)
                            }
                            </DropDownMenu>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default EditRule;