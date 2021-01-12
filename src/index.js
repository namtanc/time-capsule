import React from 'react';
import { render } from 'react-dom';

import { MessageForm } from './Form';

const Root = () => {
    return <MessageForm />;
}

render(<Root />, document.getElementById('root'));