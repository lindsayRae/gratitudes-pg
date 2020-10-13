import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import GratitudeList from './pages/GratitudeList';
import HeaderRow from './Header/Header';
import Home from './pages/Home';
import Nav from './Nav';
//import AllGratitudes from './pages/AllGratitudes';

//import GratitudeForm from './pages/GratitudeForm';

import './App.css';

//  functional component
function App() {
  return (
   <div className=''>
   
    <HeaderRow />
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/all' exact component={AllGratitudes} /> */}
      </Switch>
      <Nav />
    </BrowserRouter>

   </div>
  );
}

export default App;
