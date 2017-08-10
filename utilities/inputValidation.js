export const validMinimum = (rule) => {
    return rule.quantity[0] !== undefined && rule.quantity[0] !== null;
}

export const validMaxium = (rule) => {
    return rule.quantity[1] !== undefined && rule.quantity[1] !== null;
}

export const validRange = (rule) => {
    return rule.quantity[0] && rule.quantity[1] && (rule.quantity[1] > rule.quantity[0]);
}