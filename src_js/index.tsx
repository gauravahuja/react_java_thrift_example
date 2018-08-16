import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FooServicePing } from './components/FooServicePing';

let reactRoot = document.createElement('div');
reactRoot.id = 'react-root';
document.getElementsByTagName('body')[0].appendChild(reactRoot);

ReactDOM.render(
    <FooServicePing/>,
    document.getElementById('react-root')
);