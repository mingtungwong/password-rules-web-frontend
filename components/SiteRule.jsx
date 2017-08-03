import React from 'react';

class SiteRule extends React.Component {
    render() {
        let ruleStringMap = {
            Minimum: "At least",
            Maximum: "At most",
            Range: "Between",
            No: "No"
        }

        const rules = this.props.rule;
        const ruleType = rules.rule;

        const ruleString = ruleStringMap[ruleType];
        let quantityString = "";
        if(rules.rule === "Range") quantityString = ` ${rules.quantity[0]} and ${rules.quantity[1]} `;
        else if(rules.rule === "Minimum") quantityString = ` ${rules.quantity[0]} `;
        else if(rules.rule === "Maximum") quantityString = `${rules.quantity[1]}`;
        
        const categoryString = `${rules.category}`;

        return (
            <div>
                {`${ruleString}${quantityString}${categoryString}`}
            </div>
        )
    }
}

export default SiteRule;