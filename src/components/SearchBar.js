import React, {useState} from 'react'


const SearchBar = () => {

        const [isInputVisible, setInputVisible] = useState(false);
      
        const toggleInputVisibility = (e) => {
            e.preventDefault();
          setInputVisible(!isInputVisible);
        };

  return (
    <div>
      <form className="search d-flex" role="search">
      <button className="btn search-btn " type="submit" onClick={toggleInputVisibility}><i class="bi bi-search"></i></button>
        <input className={`form-control search-inp ${isInputVisible ? 'active' : ''}`} type="search" placeholder="Search" aria-label="Search" />
        
      </form>
    </div>
  )
}


export default SearchBar
