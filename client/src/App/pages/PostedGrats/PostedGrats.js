import React from 'react';

export default ({ id, date, dailyGratitude }) => (
      <section className='section section-lg pt-lg-0 mt--200'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-12'>
                        <div className='row-grid row'>
                            <div className='col-lg-4'>
                                <div className='card shadow border-0'>
                                    <div className='py-5 card-body'>
                                        <h6>{date}</h6>
                                        <p className='description'>{dailyGratitude}</p>
                                        <button className='btn'>Delete</button>
                                        <button className='btn'>Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      </section>

);
