import { Message } from '../models/Message';

const createError = (field, errorMessage) => ({ field, errorMessage });
const RULES = {
    NotNullOrEmpty: {
        check: (message, field) => !!message[field] && message[field].length > 0,
        error: (field) => createError(field, `Doesnt' know ${field} to send`),
    },
    IsInFuture: {
        check: (message, field) => message[Message.Field.targetedDate] >= message[Message.Field.recordedDate],
        error: (field) => createError(field, 'Cannot send capsule to the past'),
    }
};

const MESSAGE_VALIDATION_RULES = {
    [Message.Field.name]: [RULES.NotNullOrEmpty],
    [Message.Field.email]: [RULES.NotNullOrEmpty],
    [Message.Field.message]: [RULES.NotNullOrEmpty],
    [Message.Field.targetedDate]: [RULES.IsInFuture],
};

export const validateField = (message, field, rules) => {
    const errors = [];
    if (rules?.length > 0) {
        rules.forEach((rule) => 
            !rule.check(message, field) && errors.push(rule.error(field))
        );
    }

    return errors;
}

export const validateMessage = (message) => {
    let errorList = [];
    
    for(let field in Message.Field) {
        if (!!MESSAGE_VALIDATION_RULES[field]) {
            const errors = (validateField(message, field, MESSAGE_VALIDATION_RULES[field]));
            errorList = errorList.concat(errors);
        }
    }

    return { isValid: errorList.length < 1, errors: errorList};
}
