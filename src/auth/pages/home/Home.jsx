import React from 'react'
import './Home.css'
import Para from '../../components/para/Para'
import DefaultBtn from '../../components/defaultbtn/DefaultBtn'
import CompaniesLogo from '../../images/companieslogo.png'
import AboutImg from '../../images/aboutimg.jpg'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardText } from 'react-bootstrap'

function Home() {
  return (
    <div className='home-page'>
      <header className='h-100 min-vh-100
        d-flex align-items-center text-light shadow'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 
                   d-flex d-sm-block flex-column
                   align-items-center'>
              <h2 className='mb-0 text-white fw-bold'>
                Love the Planet
              </h2>
              <h1 className='mb-5 text-white 
                      fw-bold text-center text-sm-start'>
                we walk on
              </h1>
              <Para />
              <div className='d-flex gap-2'>
                <DefaultBtn
                  btntype={'Shop Men'}
                />
                <DefaultBtn
                  btntype={'Shop Women'}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className='container my-3 border-bottom'>
        <div className='row'>
          <div className='col-lg-10 d-flex
            justify-content-center'>
            <h5 className='text-uppercase mt-5'>As seen in:</h5>
            <img src={CompaniesLogo} className='img-fluid w-75 justify-content-center'
              alt='about img' />
          </div>
        </div>
      </div>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-lg-8 d-flex
             d-none d-lg-flex'>
            <img src={AboutImg} className='img-fluid w-75 '
              alt='about img' />
          </div>
          <div className='col-lg-4 d-flex flex-column mt-5'>
            <h2 className='mb-5 text-uppercase fw-bold text-warning'>About Us</h2>
            <h2 className='fw-bold'>Selected materials designed for comfort and sustainability</h2>
            <div className='text-secondary'>
              <Para />
            </div>
            <Link to="/about">
              <button type='button' className='btn btn-outline-warning btn-lg'>Read me more</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='card-container'>
        <Card className='h-100 shadow text-center'>
          <CardBody>
            <div className='p-4'>
              <CardText>
                <h2 className='fw-bold'>See how your shoes are made</h2>
                <div className='text-secondary'>
              <Para />
            </div>
              </CardText>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Home