const ruleChoices = ["Minimum", "Maximum", "Range", "No"];
const categoryChoices = ["Numbers", "Lowercase Letters", "Uppercase Letters", "Characters", "Special Characters", "Spaces", "Non-Letter Characters"];

export const validMinimum = (rule) => {
    return typeof rule.quantity[0] === 'number' && rule.quantity[0] > 0;
}

export const validMaximum = (rule) => {
    return typeof rule.quantity[1] === 'number' && rule.quantity[1] > 0;
}

export const validRange = (rule) => {
    return (validMinimum(rule) && validMaximum(rule)) && (rule.quantity[1] > rule.quantity[0]);
}

export const validateRules = (rules) => {
    let isValid = true;
    for(let rule of rules) {
        switch(ruleChoices[rule.rule]) {
            case "Minimum":
                if(!validMinimum(rule)) isValid = false;
                break;
            case "Maximum":
                if(!validMaximum(rule)) isValid = false;
                break;
            case "Range":
                if(!validRange(rule)) isValid = false;
                break;
        }
    }
    return isValid ? rules.length > 0 : false;
}

export const isDifferentRules = (original, newRules) => {
    let maximum = Math.max(original.length, newRules.length);
    
    for(let i = 0; i < maximum; i++) {
        if(!_.isEqual(original[i], newRules[i])) return true;
    }

    return false;
}