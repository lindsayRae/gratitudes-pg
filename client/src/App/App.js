import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Nav from './components/Nav';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AllGratitudes from './pages/AllGratitudes';
import SinglePost from './pages/SinglePost';

import './App.css';

//  functional component
function App() {
  return (
   <div className=''>
      <BrowserRouter>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/all' exact component={AllGratitudes} />
        <Route path='/:id' exact component={SinglePost} />
        
      </Switch>
      </BrowserRouter>
   </div>
  );
}

export default App;
