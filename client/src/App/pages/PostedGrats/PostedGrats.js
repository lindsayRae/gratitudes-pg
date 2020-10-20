import React from 'react';
import Button from 'react-bootstrap/Button';

export default ({ id, date, dailyGratitude }) => (
      <section className='section section-lg pt-lg-0 mt--200'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-12'>
                        <div className='row-grid row'>
                            <div className='col-lg-4 col-md-5 col-sm-6'>
                                <div className='card shadow border-0 mb-4'>
                                    <div className='py-5 card-body'>
                                        <h6>{date}</h6>
                                        <p className='description'>{dailyGratitude}</p>
                                        <Button type='button' variant="danger" size="sm" className='btn'>Delete</Button>
                                        <Button type='button' variant="info" size="sm" className='btn ml-3'>Edit</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      </section>

);
