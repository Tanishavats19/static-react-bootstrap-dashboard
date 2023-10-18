import React, {useState} from 'react'
import SearchBar from './SearchBar'
import Sidebar from './Sidebar';

const Header = () => {

    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebarVisibility = (e) => {
      setSidebarVisible(!isSidebarVisible);
    };

  return (
    <div className="d-flex mt-3 justify-content-between">
      <button className="btn dashboard-btn " type="submit" 
      onClick={toggleSidebarVisibility}
      data-bs-toggle="offcanvas"
      data-bs-target="#sidebar">
        <i class="bi bi-list"></i>
    </button>
      <h2 className='flex-grow-4'>Hello, Evano!</h2>
      <div className=''>
        <SearchBar/>
      </div>
      <div className={`offcanvas offcanvas-start ${isSidebarVisible ? 'show' : ''}`} id="sidebar" tabIndex="-1" aria-labelledby="sidebarLabel" style={{width:230}}>
        <Sidebar />
      </div>
      
    </div>
  )
}

export default Header
