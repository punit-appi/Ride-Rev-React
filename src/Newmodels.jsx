import React from 'react'

const Newmodels = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      <div className="sidebar">
      <h2><img src="https://download.logo.wine/logo/KTM/KTM-Logo.wine.png" alt="" height="50px" width="100px" /></h2>
        <ul>
          <li ><a href="/"><button>Home</button></a></li>
          <li><a href="/register"><button>Register</button></a></li>
          <li><a href="/Newmodels"><button>New Models</button></a></li>
          
          <li><a href="/Bookservice"><button>Book Service</button></a></li>
        </ul>
      </div>

    
      <div className="main-content1" >
        <h1>BIKE MODELS</h1>
        <div className='bikeimg'>
           <img src="https://i.pinimg.com/736x/bf/db/0a/bfdb0a7ef3fbbc57857e1f6a58bfd90d.jpg" height="150px" width="150px" style={{borderRadius:"20px"}} alt="" />
           <br />
           <button className='bikename'>DUKE</button>
        </div>
        <div className='bikeimg'>
            <img src="https://i.pinimg.com/736x/bb/1a/cf/bb1acf8c818f5bd999847037fc2d1895.jpg"  height="150px" width="150px" style={{borderRadius:"20px"}} alt="" />
           <br />
           <button className='bikename'>KTM RC</button>
        </div>
        <div className='bikeimg'>
        <img src="https://i.pinimg.com/736x/a9/f2/17/a9f2174b5986032661008560684633dd.jpg" height="150px" width="150px" style={{borderRadius:"20px"}} alt="" />
        <br />
           <button className='bikename' > VITPILEN</button>
        </div>
        <div className='bikeimg'>
           <img src="https://i.pinimg.com/736x/24/5b/d4/245bd4565371816f118f0c0acf973ecb.jpg" height="150px" width="150px" style={{borderRadius:"20px"}} alt="" />
           <br />
           <button className='bikename'>ADVENTURE</button>
        </div>
      </div>
    </div>
  )
}

export default Newmodels