import React from 'react'
import './Home.css'
import Para from '../../components/para/Para'
import DefaultBtn from '../../components/defaultbtn/DefaultBtn'
import CompaniesLogo from '../../images/companieslogo.png'
import AboutImg from '../../images/aboutimg.jpg'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardFooter, CardText, CardTitle } from 'react-bootstrap'
import AboutShoe from '../../images/aboutshoe.png'
import ShoesCard1 from '../../components/shoes-card/ShoesCard1'
import ShoesCard2 from '../../components/shoes-card/ShoesCard2'
import ShoeBadge from '../../images/recycled-shoe-badge-1.svg'
import ShoeBadge1 from '../../images/recycled-shoe-badge-2.svg'
import ShoeBadge2 from '../../images/recycled-shoe-badge-3.svg'
import RecycledCircleImg from '../../images/recycled-circle-image.jpg'
import ReviewCard from '../../components/review-card/ReviewCard'

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
              <h1 className='mb-4 text-white 
                      fw-bold text-center text-sm-start'>
                we walk on
              </h1>
              <p className='letter-spacing-4'>
                Bibendum fermentum, aenean donec pretium aliquam blandit tempor imperdiet
                arcu arcu ut nunc in dictum mauris at ut.</p>
              <div className='d-flex gap-3'>
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
            {/* anshika231112 soni_sum otilia_sharma vaishalii.6 aishamalan21 jangral335 sejusinghv  */}
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
      <div className='quality-section container'>
        <div className='row'>
          <div className='col-lg-12'>
            <Card className='h-100 border-0' >
              <CardFooter className='d-flex border-0 justify-content-center p-5 '>
                <div className='d-flex flex-column justify-content-center '>
                  <div className='d-flex flex-column p-5 justify-content-center border-bottom'>
                    <CardText className='text-warning'>01.</CardText>
                    <CardTitle className='fw-bold'>Pet canvas</CardTitle>
                    <CardText>Morbi eget bibendum sit adipiscing
                      morbi ac nisl vitae maecenas nulla cursus</CardText>
                  </div>
                  <div className='d-flex flex-column p-5 justify-content-center'>
                    <CardText className='text-warning'>02.</CardText>
                    <CardTitle className='fw-bold'>Algae foam + vegan glue</CardTitle>
                    <CardText>Enim tincidunt donec vulputate magna pharetra mattis in</CardText>
                  </div>
                </div>
                <div className='d-flex flex-column text-center w-100'>
                  <CardTitle className='fw-bold fs-2 mt-4 mb-4'>See how your shoes are made</CardTitle>
                  <CardText className='text-secondary mb-5'>Urna, felis enim orci accumsan urna blandit egestas mattis egestas
                    feugiat viverra ornare donec adipiscing semper aliquet integer risus leo volutpat
                    nulla enim ultrices</CardText>
                  <img src={AboutShoe} className='img-fluid w-100' />
                </div>
                <div className='d-flex flex-column justify-content-center'>
                  <div className='d-flex flex-column p-5 justify-content-center border-bottom'>
                    <CardText className='text-warning'>03.</CardText>
                    <CardTitle className='fw-bold'>Organic cotton</CardTitle>
                    <CardText>A vel ipsum, sed dignissim elementum ultrices amet</CardText>
                  </div>
                  <div className='d-flex flex-column p-5 justify-content-center'>
                    <CardText className='text-warning'>04.</CardText>
                    <CardTitle className='fw-bold'>Upcycled plastic bottles</CardTitle>
                    <CardText>Pellentesque viverra amet netus facilisis amet felis odio tortor orci cursus est</CardText>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <ShoesCard1
        text={'Our Best Seller'}
        abouttext={'VIEW ALL BEST SELLERS'}
      />
      <div className='section-page1 d-flex gap-4 p-5'>
        <section className='menfootwear mt-3'>
          <div className='container h-100 d-flex flex-column align-items-center justify-content-center'>
            <h1 className='text-light'>Men</h1>
            <DefaultBtn
              btntype={"SHOP MEN"}
            />
          </div>
        </section>
        <section className='womenfootwear mt-3'>
          <div className='container h-100 d-flex flex-column align-items-center justify-content-center'>
            <h1 className='text-light'>Women</h1>
            <DefaultBtn
              btntype={"SHOP WOMEN"}
            />
          </div>
        </section>
      </div>
      <ShoesCard2
        text={'New Arrivals'}
        abouttext={'VIEW ALL NEW ARRIVALS'}
      />
      <div className='card-section'>
        <div className='row-lg p-5'>
          <div className='col-lg-12'>
            <Card className='h-100 border-0'>
              <CardFooter className='d-flex align-items-center border-0'>
                <CardBody>
                  <div className='p-4 col-6 mt-5 mb-5'>
                    <CardText>
                      <div className='text-secondary lh-lg'>
                        <Para />
                      </div>
                      <div className='d-flex gap-3 mt-5'>
                        <img src={ShoeBadge} />
                        <img src={ShoeBadge1} />
                        <img src={ShoeBadge2} />
                      </div>
                    </CardText>
                  </div>
                </CardBody>
                <img src={RecycledCircleImg} className='img-fluid rounded-circle mx-3' />
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <div className='about-customers container'>
        <h2 className='text-center mb-5 fw-bold fs-1'>Our Customers speak for us</h2>
        <div className='row p-3'>
          <ReviewCard
            img="src/auth/images/customer-avatar-image-3.jpg"
            personname={'Luis adrian'}
          />
          <ReviewCard
            img="src/auth/images/customer-avatar-image-2.jpg"
            personname={'Julia keys'}
          />
          <ReviewCard
            img="src/auth/images/customer-avatar-image-1.jpg"
            personname={'maria anna'}
          />
        </div>
      </div>
      <div className='container p-5'>
         <div className='text-center mb-5'>
          <h6 className='text-secondary'>4.8 average rating from 1814</h6>
         </div>
      </div>
    </div>
  )
}

export default Home