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

export const formatDateString = (timestamp) => {
    const date = new Date(timestamp);
    const option = { year: 'numeric', month: 'long', day: 'numeric'};

    return date.toLocaleDateString('en-GB');
}

export const formatDateTimeStamp = (date) => date.getTime();