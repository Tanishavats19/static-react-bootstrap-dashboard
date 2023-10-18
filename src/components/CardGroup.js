import React from 'react'
import IncomeImg from '../assets/income.svg';
import OrderImg from '../assets/order.png';
import BalanceImg from '../assets/balance.png';
import SalesImg from '../assets/sales.png';

const CardGroup = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
        <div className="col card-col">
            <div className="card h-100">
                <div class="row g-0">
                    <div class="col-md-4 ">
                        <img src={IncomeImg} class="img-fluid rounded mt-3 mx-2" alt="..." style={{width:80}}/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                    <p class="card-text"><small class="text-body-secondary">Earning</small></p>
                        <h3 class="card-title">$198k</h3>
                        <p class="card-text"><small class="text-body-secondary">37.8% this month</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col card-col">
            <div className="card h-100">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={OrderImg} class="img-fluid rounded mt-3 mx-2" alt="..." style={{width:90}} />
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                    <p class="card-text"><small class="text-body-secondary">Orders</small></p>
                        <h3 class="card-title">$2.4k</h3>
                        <p class="card-text"><small class="text-body-secondary">2% this month</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col card-col">
            <div className="card h-100">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={BalanceImg} class="img-fluid rounded mt-3 mx-2" alt="..." style={{width:90}} />
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                    <p class="card-text"><small class="text-body-secondary">Balance</small></p>
                        <h3 class="card-title">$2.4k</h3>
                        <p class="card-text"><small class="text-body-secondary">2% this month</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col card-col">
            <div className="card h-100">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={SalesImg} class="img-fluid rounded mt-3 mx-2" alt="..." style={{width:80}} />
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                    <p class="card-text"><small class="text-body-secondary">Total Sales</small></p>
                        <h3 class="card-title">$89k</h3>
                        <p class="card-text"><small class="text-body-secondary">11% this week</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        </div>
    </div>
  )
}

export default CardGroup
