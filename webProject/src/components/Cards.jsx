import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardStyle.css";
const Cards = () => {
  // const handleRedirect = () => {
  //   window.location.href = "http://127.0.0.1:5500/index.html";
  // };
  return (
    <React.Fragment>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                src="/images/photo7.jpg"
                className="card-img-top"
                alt="..."
                height="300px"
              />
              <div className="card-body">
                <h5 className="card-title">Community</h5>
                <p className="card-text">
                  Connect with other pet lovers and discover more about pets.
                </p>
                <a href="#" className="btn btn-primary">
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://epicdrops.com/cdn/shop/collections/PSX_Logos-01_1_1200x1200.jpg?v=1655752145"
                className="card-img-top"
                alt="..."
                height="300px"
              />
              <div className="card-body">
                <h5 className="card-title">Animations</h5>
                <p className="card-text">
                  Learn while enjoying pets mimicing other pets by 3D
                  simulations
                </p>
                <a
                   href="#" className="btn btn-primary">
                  
                
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="/images/photo8.jpg"
                className="card-img-top"
                alt="..."
                height="300px"
              />
              <div className="card-body">
                <h5 className="card-title">Blogs</h5>
                <p className="card-text">
                  Explore blogs and articles about your pet and discover tips.
                </p>
                <a href="#" className="btn btn-primary">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sep"></div>
    </React.Fragment>
  );
};

export default Cards;
