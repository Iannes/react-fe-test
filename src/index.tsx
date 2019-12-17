import React from 'react';
import ReactDOM from 'react-dom';
import 'Modules/core/index.scss';
import App from 'Modules/components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
