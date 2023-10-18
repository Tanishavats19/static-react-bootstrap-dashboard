import React from 'react'


const Sidebar = () => {
  return (
    <>
        <div className="d-flex flex-column p-3 bg-dark position-fixed" style={{width: 240,height:'100vh' }}>
            <div className='flex-fill'>
            <div>
                <a href="/" className="d-flex align-items-center  mb-md-0 me-md-auto text-center text-white text-decoration-none">
                     <i class="bi bi-nut me-2 ms-3"></i>
                    <span className="fs-4">Dashboard</span>
                    <i class="bi bi-list ms-auto"></i>
                </a>
                <hr/>

            </div>
            
            <div>
                <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">
                    <i class="bi bi-house me-2"></i>
                     Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link">
                    <i class="bi bi-bag me-2"></i>
                    Product
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link">
                    <i class="bi bi-people me-2"></i>
                    Customers
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link">
                    <i class="bi bi-wallet2 me-2"></i>
                    Income
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link">
                    <i class="bi bi-share me-2"></i>
                    Promote
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link">
                    <i class="bi bi-info-circle me-2"></i>
                    Help
                    </a>
                </li>
                </ul>
                <hr/>
            </div>
            </div>
            
            
            <div className=" mt-auto ">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none mb-3" role="button" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>Evano <i class="bi bi-caret-down-fill"></i></strong>
                </a>
                
            </div>
        </div>
    </>
  )
}

export default Sidebar;
