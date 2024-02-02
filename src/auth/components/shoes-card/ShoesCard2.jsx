import React from 'react'
import Defaultcard from './Defaultcard/Defaultcard'


function ShoesCard2({text,abouttext}) {
  return (
    <div className='default-shoes-section container mt-5'>
    <div className='d-flex justify-content-between'>
        <h3 className='mb-4 fw-bold'>{text}</h3>
        <p className='text-uppercase fw-bold cursor-pointer'>{abouttext}</p>
    </div>
    <div className='d-flex'>
    <Defaultcard
    cardtext={'Men Navy Running'}
    shoesprice={'$100.00'}
    img="src/auth/images/men-shoes-2.jpg"
  />
     <Defaultcard
    cardtext={'Men Green Running'}
    shoesprice={'$89.00'}
    img="src/auth/images/men-shoes-5.jpg"
  />
  <Defaultcard
    cardtext={'Men Earth-Tone Sneaker'}
    shoesprice={'$70.00'}
    img="src/auth/images/men-shoes-6.jpg"
  />
    </div>
    <div className='d-flex'>
    <Defaultcard
    cardtext={'Women Ten Sneaker'}
    shoesprice={'$80.00'}
    img="src/auth/images/men-shoes-3.jpg"
  />
   <Defaultcard
    cardtext={'Women Peach Training'}
    shoesprice={'$80.00'}
    img="src/auth/images/women-shoes-4.jpg"
  />
   <Defaultcard
    cardtext={'Women Mint Sneaker'}
    shoesprice={'$80.00'}
    img="src/auth/images/women-shoes-6.jpg"
  />
    </div>
    <div className='d-flex'>
    <Defaultcard
    cardtext={'Men Classic Blue'}
    shoesprice={'$80.00'}
    img="src/auth/images/men-shoes-1.jpg"
  />
   <Defaultcard
    cardtext={'Women Blue Training'}
    shoesprice={'$60.00'}
    img="src/auth/images/women-shoes-1.jpg"
  />
   <Defaultcard
    cardtext={'Men Navy Running'}
    shoesprice={'$100.00'}
    img="src/auth/images/men-shoes-2.jpg"
  />
    </div>
</div>
  )
}

export default ShoesCard2