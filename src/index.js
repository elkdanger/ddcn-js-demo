import Logger from './logger';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';

new Logger().log('Hello');

const root = document.getElementById('app');

ReactDOM.render(<App/>, root);