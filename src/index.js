import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    //     {/* <Comment
    //     author={{ name: 'Jackson', avatarUrl:'https://horseman.blob.core.windows.net/uploads/3-004280803626208751-screen.jpg'}}
    //     text='Hi, thanks for the stars in the sky. We enjoy long walks in the dark and gazing at the twilight.'
    // />, */}
    <App />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
