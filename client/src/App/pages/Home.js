import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="App">
      <h1>Hello, What are you grateful for today?</h1>
      <form>
        <input
          type="text"
          placeholder="I am grateful for ..."
          name="graefulEntry"
        />
      </form>
      <button variant="raised">
          Send entry
      </button>
      <br />
      {/* Link to List.js */}
      <Link to={'./list'}>
        <button variant="raised">
            View My Grateful List
        </button>
      </Link>
    </div>
);
export default Home;
