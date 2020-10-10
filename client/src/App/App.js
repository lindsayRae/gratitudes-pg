import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import GratitudeForm from './pages/GratitudeForm';
import GratitudeList from './pages/GratitudeList';

import './App.css';
// import Home from './pages/Home';
// import List from './pages/List';

function App() {
  return (
    <div className='grat-app'>
        <GratitudeList />
    </div>
  );
}
/* eslint-disable */
// class App extends Component {
//   render() {
//     const App = () => (
//       <div>      
//         <Switch>
//           <Route exact path='/' component={Home}/>
//           <Route path='/list' component={List}/> 
//         </Switch>
//       </div>
//     );
//     return (
//       <Switch>
//         <App/>
//       </Switch>
//     );
//   }
// }

export default App;
