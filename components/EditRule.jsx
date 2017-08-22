import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel';

const ruleChoices = ["Minimum", "Maximum", "Range", "No"];
const categoryChoices = ["Numbers", "Lowercase Letters", "Capital Letters", "Characters", "Special Characters", "Spaces", "Non-Letter Characters"];
const errors = {
    "NaN": "One or more values entered is not a number",
    "Range": "The range of numbers is invalid"
}

class EditRule extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rule: ruleChoices.indexOf(props.rule),
            category: categoryChoices.indexOf(props.category),
            quantity: props.quantity,
            id: props.id
        }
        this.handleRuleChange = this.handleRuleChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.edit = this.edit.bind(this);
    }

    edit() {
        this.props.editRule(this.state);
    }

    handleRuleChange(event, index, value) {
        this.setState({rule: +value, quantity: []}, this.edit);
    }

    handleCategoryChange(event, index, value) {
        this.setState({category: +value, quantity: []}, this.edit);
    }

    handleQuantityChange(event, value) {
        const quantity = this.state.quantity.map(item => item);
        if(!isNaN(value)) {
            if(event.target.id === 'quantityMin') quantity[0] = +value;
            else quantity[1] = +value;
            this.setState({quantity}, this.edit);
        }        
    }

    render() {
        const choice = ruleChoices[this.state.rule];
        const category = categoryChoices[this.state.category];

        return (
            <div className="editRuleLine">
                {
                    this.state.error ?
                    (
                        <div className="errorText">
                            {errors[this.state.error]}
                        </div>
                    )
                    : null
                }
                <MuiThemeProvider>
                    <div className="editMenu">
                        <div>
                            <DropDownMenu
                                value={this.state.rule}
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
                                value={this.state.category}
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
                                    floatingLabelFixed={true}
                                    onChange={this.handleQuantityChange}
                                    className="quantityTF"
                                    id="quantityMin"
                                    value={this.state.quantity[0]}
                                />
                                : null
                            }
                        </div>
                        <div>
                            {
                                choice === "Maximum" || choice === "Range" ?
                                <TextField
                                    floatingLabelText={`Maximum quantity`}
                                    floatingLabelFixed={true}
                                    onChange={this.handleQuantityChange}
                                    className="quantityTF"
                                    value={this.state.quantity[1]}
                                    id="quantityMax"
                                />
                                : null
                            }
                        </div>
                        <div>
                            <IconButton onClick={ () => this.props.deleteRule(this.state.id) }>
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