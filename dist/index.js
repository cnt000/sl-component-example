import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const app = () => ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

app();
export default app;