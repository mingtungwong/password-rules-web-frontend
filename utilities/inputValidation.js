export const validMinimum = (rule) => {
    return typeof rule.quantity[0] === 'number' && rule.quantity[0] !== 0;
}

export const validMaximum = (rule) => {
    return typeof rule.quantity[1] === 'number' && rule.quantity[1] !== 0;
}

export const validRange = (rule) => {
    return (validMinimum(rule) && validMaximum(rule)) && (rule.quantity[1] > rule.quantity[0]);
}