import React from 'react'

function DefaultBtn({btntype}) {
  return (
   <div className='bg-white rounded'>
   <button class="btn btn-outline-dark btn-lg rounded-0 border-0" type="submit">{btntype}</button>
   </div>
  )
}

export default DefaultBtn