import React from 'react'
import SearchBar from './SearchBar'
import Table from './Table'

const TableCard = () => {
  return (
    <>
    <div className='card p-2 mt-4 mb-4'>
        <div className='d-flex justify-content-between table-header mt-3 ms-2'>
            <div className=''>
                <h4>Products Sold</h4>
            </div>
            <div className='d-flex mx-3 gap-5'>
                <div className=''>
                    <SearchBar />
                </div>
                <div className=''>
                    <p><small>Last 30 days <i class="bi bi-caret-down-fill"></i></small></p>
                </div>
            </div>
            
        </div>
        <div className='table ms-2 mt-3'> 
            <Table />

        </div>
        </div>
            
    </>
  )
}

export default TableCard
