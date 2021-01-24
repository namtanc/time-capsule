import { Message } from './models/Message';

export const formatMessage = (message) => {
    if (!message) return null;

    const formattedMessage = {};
    for(let field in Message.FetchField) {
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

export const getTodayTimeStamp = () => new Date().setHours(0, 0, 0, 0);
export const formatDateTimeStamp = (date) => date.setHours(0, 0, 0, 0);
export const checkValidTargetedDate = (date) => getTodayTimeStamp() > formatDateTimeStamp(date);