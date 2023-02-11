import React from 'react'
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {Link} from 'react-router-dom'

function AddProduct() {

    const formInitialDetails = {
        productName: '',
        category: '',
        description: '',
        image: '',
        quantity: '',
      };
      const [formDetails, setFormDetails] = useState(formInitialDetails);
      const [buttonText, setButtonText] = useState('Add');
      const [status, setStatus] = useState({});
    
      const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Adding...');
        let response = await fetch('', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(formDetails),
        });
        setButtonText('Add');
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
          setStatus({ succes: true, message: 'Added Successfully !' });
        } else {
          setStatus({
            succes: false,
            message: 'Something Went Wrong, Please Try Again Later.',
          });
        }
      };
    
      return (
        <section className='register' id='register'>
          <Container>
            <Row className='align-items-center'>
              <Col size={12} md={3}>
              </Col>
              <Col size={12} md={6}>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div
                      className={
                        isVisible ? 'animate__animated animate__fadeIn' : ''
                      }
                    >
                      <h2 className='text-center'>Add Product</h2>
                      <form onSubmit={handleSubmit}>
    
                        <input
                          type='text'
                          value={formDetails.productName}
                          placeholder='Product Name'
                          onChange={(e) => onFormUpdate('productName', e.target.value)}
                          required
                        />

                        <input
                          type='text'
                          value={formDetails.category}
                          placeholder='Category'
                          onChange={(e) => onFormUpdate('category', e.target.value)}
                          required
                        />

                        <textarea rows="6" value={formDetails.description} placeholder="Description" onChange={(e) => onFormUpdate('description', e.target.value)}></textarea>

                        <input
                          type='file'
                          value={formDetails.image}
                          placeholder='Image'
                          onChange={(e) => onFormUpdate('image', e.target.value)}
                          required
                        />
    
                        <input
                          type='number'
                          value={formDetails.quantity}
                          placeholder='Quantity'
                          onChange={(e) => onFormUpdate('quantity', e.target.value)}
                          required
                        />
    
                        <button type='submit'>
                          <span>{buttonText}</span>
                        </button>
    
                        {status.message && (
                          <Col>
                            <p
                              className={
                                status.success === false ? 'danger' : 'success'
                              }
                            >
                              {status.message}
                            </p>
                          </Col>
                        )}
                      </form>
                    </div>
                  )}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
  );
};

export default AddProduct