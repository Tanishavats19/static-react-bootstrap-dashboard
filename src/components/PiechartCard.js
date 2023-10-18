import React from 'react'
import Piechart from './Piechart'

const PiechartCard = () => {
  return (
    <>
    <div className='d-flex flex-column justify-content-center'>
        <div className=" mt-3 justify-content-between mx-3">
        <div className='flex-grow-3'>
            <h4>Customers</h4>
            <p><small>Customers that buy products</small></p>
        </div>
        </div>
        <div className='my-3 '>
            <Piechart />
        </div>
    </div>
        
            
    </>
  )
}

export default PiechartCard
