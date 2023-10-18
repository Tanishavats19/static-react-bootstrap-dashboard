import React from 'react'
import SaleImg from '../assets/sales.png'
import D3 from '../assets/threed.jpg'

const Table = () => {
  return (
    <div>
      <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Stock</th>
            <th scope="col">Price</th>
            <th scope="col">Total Sales</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">
                <img src={D3} class="img-fluid mt-3 mx-2" alt="..." style={{width:70}} />
                    Abstract 3D</th>
            <td>32</td>
            <td>$ 45.99</td>
            <td>20</td>
            </tr>
            <tr>
            <th scope="row">
                <img src={SaleImg} class="img-fluid rounded mt-3 mx-2" alt="..." style={{width:40}} />
                    Abstract 3D</th>
            <td>32</td>
            <td>$ 45.99</td>
            <td>20</td>
            </tr>
            <tr>
            <th scope="row">
                <img src={SaleImg} class="img-fluid rounded mt-3 mx-2" alt="..." style={{width:40}} />
                    Abstract 3D</th>
            <td>32</td>
            <td>$ 45.99</td>
            <td>20</td>
            </tr>
        </tbody>
</table>
    </div>
  )
}

export default Table
