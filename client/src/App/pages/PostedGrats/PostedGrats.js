import React from 'react';
import './PostedGrats.css';

export default (props) => (
    <section className='section section-lg pt-lg-0 mt--200'>
       <div className='content-row'>
            <h5 className=''>{props.dailyGratitude}</h5>
            <div>{props.date}</div>
       </div>
    </section>
);
