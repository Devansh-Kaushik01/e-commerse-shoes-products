import React from 'react'

function DefaultBtn({btntype}) {
  return (
   <>
   <button class="btn btn-outline-primary btn-lg" type="submit">{btntype}</button>
   </>
  )
}

export default DefaultBtn