import React from 'react';

class SiteRule extends React.Component {
    render() {
        let ruleStringMap = {
            minimum: "At least",
            maximum: "At most",
            range: "Between",
            no: "No"
        }

        const rules = this.props.rule;
        const ruleType = rules.rule;

        const ruleString = ruleStringMap[ruleType];
        let quantityString = "";
        if(rules.rule === "range") quantityString = ` ${rules.quantity[0]} and ${rules.quantity[1]} `;
        else if(rules.rule !== "no") quantityString = ` ${rules.quantity[0]} `;
        
        const categoryString = `${rules.category}`;

        return (
            <div>
                {`${ruleString}${quantityString}${categoryString}`}
            </div>
        )
    }
}

export default SiteRule;