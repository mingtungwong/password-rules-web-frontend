import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel';

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
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
    }

    handleRuleChange(event, index, value) {
        this.setState({ruleChoice: +value})
    }

    handleCategoryChange(event, index, value) {
        this.setState({ruleCategory: +value});
    }

    handleQuantityChange(event, value) {
        const quantity = this.state.quantity;
        if(Number.isInteger(value)) {
            if(event.target.id === 'quantityMin') quantity[0] = +value;
            else quantity[1] = +value;
            this.setState({quantity});
        }
    }

    render() {

        const choice = ruleChoices[this.state.ruleChoice];
        const category = categoryChoices[this.state.ruleCategory];

        return (
            <div className="editRuleLine">
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
                        <div>
                            {
                                choice === "Minimum" || choice === "Range" ?
                                <TextField
                                    floatingLabelText={`Minimum quantity`}
                                    onChange={this.handleQuantityChange}
                                    className="quantityTF"
                                    id="quantityMin"
                                />
                                : null
                            }
                        </div>
                        <div>
                            {
                                choice === "Maximum" || choice === "Range" ?
                                <TextField
                                    floatingLabelText={`Maximum quantity`}
                                    onChange={this.handleQuantityChange}
                                    className="quantityTF"
                                    id="quantityMax"
                                />
                                : null
                            }
                        </div>
                        <div>
                            <IconButton onClick={ this.props.cancel }>
                                <NavigationCancel className="closeButton" />
                            </IconButton>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default EditRule;