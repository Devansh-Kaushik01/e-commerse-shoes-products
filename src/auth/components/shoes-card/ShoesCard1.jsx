import React from 'react'
import Defaultcard from './Defaultcard/Defaultcard'

function ShoesCard1({text,abouttext}) {
    return (
        <div className='default-shoes-section container mt-5'>
            <div className='d-flex justify-content-between'>
                <h3 className='mb-4 fw-bold'>{text}</h3>
                <p className='text-uppercase fw-bold cursor-pointer '>{abouttext}</p>
            </div>
            <div className='d-flex'>
            <Defaultcard
            cardtext={'Women Blue Training'}
            shoesprice={'$60.00'}    
            img="src/auth/images/women-shoes-1.jpg"

          />
          <Defaultcard
            cardtext={'Women Candy City Run'}
            shoesprice={'$40.00'}
            img="src/auth/images/women-shoes-2.jpg"
          />
          <Defaultcard
            cardtext={'Women Green Training'}
            shoesprice={'$60.00'}
            img="src/auth/images/women-shoes-3.jpg"
          />
            </div>
            <div className='d-flex'>
            <Defaultcard
            cardtext={'Men Classic Blue'}
            shoesprice={'$69.00'}  
            img="src/auth/images/men-shoes-1.jpg"
          />
          <Defaultcard
            cardtext={'Men Navy Running'}
            shoesprice={'$100.00'}
            img="src/auth/images/men-shoes-2.jpg"
          />
          <Defaultcard
            cardtext={'Men Ten Sneaker'}
            shoesprice={'$80.00'}
            img="src/auth/images/men-shoes-3.jpg"
          />
            </div>

        </div>
    )
}

export default ShoesCard1