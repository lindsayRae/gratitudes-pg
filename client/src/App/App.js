import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Nav from './Nav';
//  import AllGratitudes from './pages/AllGratitudes';

import './App.css';

//  functional component
function App() {
  return (
   <div className=''>
      <BrowserRouter>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/all' exact component={AllGratitudes} /> */}
      </Switch>
      </BrowserRouter>
   </div>
  );
}

export default App;
