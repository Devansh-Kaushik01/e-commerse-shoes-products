import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap'
import { Star } from 'react-bootstrap-icons'
import Para from '../para/Para'

function ReviewCard({img,personname}) {
  return (
    <div className='col-lg-4'>
      <Card className='h-100'>
       <CardBody>
         <CardText>
           <div>
             <Star/>
             <Star/>
             <Star/>
             <Star/>
             <Star/>
           </div>
           <div className='fw-bold mt-4 lh-lg'> 
             <Para/>
           </div>
           <div className='mt-5 d-flex'>
             <img src={img} className='img-fluid rounded-circle mx-3 '  />
             <CardTitle className='text-uppercase mt-2'>{personname}</CardTitle>
           </div>
         </CardText>
       </CardBody>
      </Card>
    </div>

  )
}

export default ReviewCard