const ruleChoices = ["Minimum", "Maximum", "Range", "No"];
const categoryChoices = ["Numbers", "Lowercase Letters", "Capital Letters", "Characters", "Special Characters", "Spaces", "Non-Letter Characters"];

export const mapRuleValuesToString = (rule) => {
    const obj = {};
    obj.rule = ruleChoices[rule.rule];
    obj.category = categoryChoices[rule.category];
    obj.quantity = rule.quantity;
    return obj;
} 

export const mapRuleStringToValues = (rule) => {
    const obj = {};
    obj.rule = ruleChoices.indexOf(rule.rule);
    obj.category = categoryChoices.indexOf(rule.category);
    obj.quantity = rule.quantity;
    return obj;
}