import React from 'react'
import BargraphCard from './BargraphCard'
import PiechartCard from './PiechartCard'

const Stats = () => {
  return (
    <>
        <div class="row g-4 my-2">
            <div class="col-md-8">
                <div class="card " style={{maxHeight:'325px'}}>
                    <BargraphCard />
                </div>
            </div>
            <div class="col-md-4 piechart-card">
                <div class="card" style={{maxHeight:'325px'}}>
                    <PiechartCard />
                </div>
            </div>
            
                
        </div>
            
    </>
  )
}

export default Stats
