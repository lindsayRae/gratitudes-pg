import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import GratitudeForm from './pages/GratitudeForm';
import GratitudeList from './pages/GratitudeList';
import HeaderRow from './Header/Header';
import PostedGrats from './pages/PostedGrats/PostedGrats';
import './App.css';
// import Home from './pages/Home';
// import List from './pages/List';

const posts = [
  {
    id: '654',
    date: '10/11/2020',
    dailyGratitude: 'this is the first post',
  },
  {
    id: '650',
    date: '10/12/2020',
    dailyGratitude: 'this is the second post',
  },
];

//  LINDSA YPICK UP : strapi section 6 #22
function App() {
  return (
    <div className='container'>
      <HeaderRow />
      {
        posts.map((post) => (
          <PostedGrats
            key={post.id}
            date={post.date}
            dailyGratitude={post.dailyGratitude}
          />
        ))
      }

      {/* <GratitudeList /> */}
    </div>
  );
}

export default App;
