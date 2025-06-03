import React from 'react';
import bussinessOwner from '../../Images/akhuwatimgtwo.jpeg'
import Farmer from '../../Images/Portrait2.jpg'

const AkhuwatImages = () => {
  return (
    <div className="container-fluid bg-light py-5">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-md-6 py-3 mb-4 mb-md-0 d-flex justify-content-center">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHm45QctSA21uw0moUyYhOXsZjvdkR71LBw&s"
            alt="Hasina Bibi - Stitching Business" 
            className="card-img-top rounded "
          
          />
        </div>
  
        <div className="col-md-6 py-3 d-flex justify-content-center">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiCTQxbl2RP7ZBAolnL8qV3YtMPI3DtLkFsw&s"
            alt="Farzana Bibi - Beauty Parlour" 
            className="card-img-top rounded "
          
          />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default AkhuwatImages;