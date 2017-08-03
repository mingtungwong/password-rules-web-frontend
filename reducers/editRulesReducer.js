const ADD_RULE = 'ADD_RULE';
const EDIT_RULE = 'EDIT_RULE';
const DELETE_RULE = 'DELETE_RULE';

let ruleIdCounter = 0;

const findRuleByID = (rulesArray, rule) => {
    const length = rulesArray.length;
    for(let i = 0; i < length; i++) {
        if(rulesArray[i].id === rule.id) return i;
    }
    return -1;
}

const createDefaultRule = () => {
    const obj = {};
    obj.rule = 'Minimum';
    obj.category = 'Characters';
    obj.quantity = [];
    obj.id = ruleIdCounter++;
    obj.error = null;
    return obj;
}

const updateRule = (array, rule) => {
    const newArray = array.filter((item, index) => item.id !== rule.id);
    return [
        ...newArray,
        rule
    ]
}

export const addRule = () => {
    return {
        type: ADD_RULE
    }
}

export const editRule = (rule) => {
    return {
        type: EDIT_RULE,
        rule: rule
    }
}

export const deleteRule = (ruleId) => {
    return {
        type: DELETE_RULE,
        id: ruleId
    }
}

export default (state = [], action) => {
    switch(action.type) {
        case EDIT_RULE:
            return updateRule(state, action.rule);
            break;
        case ADD_RULE:
            return [
                    ...state,
                    createDefaultRule()
                ];
            break;
        case DELETE_RULE:
            return state.filter(item => item.id !== action.id);
            break;
    }

    return state;
}