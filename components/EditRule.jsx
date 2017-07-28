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
    }

    handleRuleChange(event, index, value) {
        this.setState({ruleChoice: index})
    };

    render() {
        console.log(ruleChoices);
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <DropDownMenu
                            value={this.state.ruleChoice}
                            onChange={this.handleRuleChange}
                        >
                        {
                            ruleChoices.map((choice, idx) => <MenuItem value={idx} primaryText={choice} onTouchTap={this.props.onTouchTap}/>)
                        }
                        </DropDownMenu>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default EditRule;