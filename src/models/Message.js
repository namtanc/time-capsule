const NAME = 'name';
const EMAIL = 'email';
const MESSAGE = "message";
const RECORDED_DATE = 'recordedDate';
const TARGETED_DATE = 'targetedDate';
const TAGS = 'tags';

const Label = {
    [NAME]: 'Name',
    [EMAIL]: 'Email',
    [MESSAGE]: 'Message',
    [TARGETED_DATE]: 'Opened in',
    [TAGS]: 'Tags',
};

const DefaultValue = {
    [NAME]: '',
    [EMAIL]: '',
    [MESSAGE]: '',
    [RECORDED_DATE]: new Date(),
    [TARGETED_DATE]: new Date(),
    [TAGS]: [],
};

const FetchField = {
    [NAME]: NAME,
    [MESSAGE]: MESSAGE,
    [TARGETED_DATE]: TARGETED_DATE,
    [TAGS]: TAGS,
}

const Field = {
    [NAME]: NAME,
    [EMAIL]: EMAIL,
    [MESSAGE]: MESSAGE,
    [RECORDED_DATE]: RECORDED_DATE,
    [TARGETED_DATE]: TARGETED_DATE,
    [TAGS]: TAGS,
}

const PlaceHolder = {
    [NAME]: 'name',
    [EMAIL]: 'email',
    [MESSAGE]: '...Message...',
    [TARGETED_DATE]: 'Opened in',
    [TAGS]: 'Tags',
};

export const Message = {
    DefaultValue,
    Field,
    FetchField,
    Label,
    PlaceHolder
};
