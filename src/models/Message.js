const NAME = 'name';
const EMAIL = 'email';
const MESSAGE = "message";
const RECORDED_DATE = 'recordedDate';
const TARGETED_DATE = 'targetedDate';
const TAGS = 'tags';

const Field = {
    [NAME]: NAME,
    [EMAIL]: EMAIL,
    [MESSAGE]: MESSAGE,
    [RECORDED_DATE]: RECORDED_DATE,
    [TARGETED_DATE]: TARGETED_DATE,
    [TAGS]: TAGS,
}

const DefaultValue = {
    [NAME]: '',
    [EMAIL]: '',
    [MESSAGE]: '',
    [RECORDED_DATE]: Date.now(),
    [TARGETED_DATE]: Date.now(),
    [TAGS]: [],
};

export const Message = {
    Field,
    DefaultValue
};
