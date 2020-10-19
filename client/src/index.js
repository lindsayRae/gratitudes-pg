import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import UserContextProvider from './App/context/UserContext';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
        <UserContextProvider>
            <App />
        </UserContextProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
