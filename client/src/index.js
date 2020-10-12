import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';

import App from './App/App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

// render((
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>
// ), document.getElementById('root'));
