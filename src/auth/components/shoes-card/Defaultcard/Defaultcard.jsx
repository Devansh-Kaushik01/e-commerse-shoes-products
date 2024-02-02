import React from 'react'
import { Card, CardBody, CardText } from 'react-bootstrap'
// import WomenShoes1 from "../../../images/women-shoes-1.jpg"
import { Star } from 'react-bootstrap-icons'

function Defaultcard({ cardtext, shoesprice,img }) {
    return (
        <>
            <div className='row g-4'>
                <div className='col-lg'>
                    <Card className='h-100 border-0'>
                        <CardBody className='text-center'>
                            <img src={img} className='img-fluid w-85' />
                            <div className='p-4'>
                                <CardText>
                                    <h4>{cardtext}</h4>
                                </CardText>
                                <CardText>
                                    <p className='fw-bold text-secondary'>{shoesprice}</p>
                                    <div className='text-secondary'>
                                        <Star size={25}/>
                                        <Star size={25}/>
                                        <Star size={25}/>
                                        <Star size={25}/>
                                        <Star size={25}/>
                                    </div>
                                </CardText>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Defaultcard