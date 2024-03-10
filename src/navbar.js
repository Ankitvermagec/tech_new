import React, { useEffect } from 'react';
import axios from 'axios';


function Navbar(){

    useEffect(()=>{
        const fet_ch = async ()=>{
          console.log("fet_ch")
          var  data = await axios.get("http://localhost:4500/data")
          console.log(data)
        }
        fet_ch()
    })

  
    return(
        <>
                <section>
                    <div className='container-fluid '>
                    <div className='row'>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid bg-dark  p-2">
    <a class="navbar-brand" href="#"  style={{color:"white"}}>Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{color:"white"}} >Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"  style={{color:"white"}}>Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"  style={{color:"white"}}>
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true"   style={{color:"white"}}>Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit"  style={{color:"white"}}>Search</button>
      </form>
    </div>
  </div>
</nav>
                    </div>
                    </div>    
                </section>            
        </>
    )
}

export default Navbar;