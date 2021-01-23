import { Message } from './models/Message';

export const formatMessage = (message) => {
    if (!message) return null;

    const formattedMessage = { ...message };

    for(let field in Message.Field) {
        formattedMessage[field] = message[field] ?? Message.DefaultValue[field];
    }

    return formattedMessage;
};

export const formatMessages = (messages) => (messages || []).map((m) => formatMessage(m));