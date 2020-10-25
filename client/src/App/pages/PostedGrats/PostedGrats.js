import React from 'react';
import Button from 'react-bootstrap/Button';

export default (props) => {
  //console.log(props);
  return (
      <section className='section section-lg pt-lg-0 mt--200'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-12'>
                        <div className='row-grid row'>
                            <div className='col-lg-4 col-md-5 col-sm-6'>
                                <div className='card shadow border-0 mb-4'>
                                    <div className='py-5 card-body'>
                                        <h6>My Gratitude for {props.date}</h6>
                                        <p className='description'>{props.dailyGratitude}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
  );
};
