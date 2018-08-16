import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/Hello';

let reactRoot = document.createElement('div');
reactRoot.id = 'react-root';
document.getElementsByTagName('body')[0].appendChild(reactRoot);

ReactDOM.render(
    <Hello compiler='TypeScript' framework='React' />,
    document.getElementById('react-root')
);