import React from 'react'
import Bargraph from './Bargraph'

const BargraphCard = () => {
  return (
    <>
        <div className="d-flex mt-3 justify-content-between mx-3">
            <h4 className='flex-grow-3'>Overview</h4>
            <div className=''>
                <p><small>Quarterly <i class="bi bi-caret-down"></i></small></p>
            </div>
            
            </div>
            <Bargraph />
    </>
        
  )
}

export default BargraphCard
