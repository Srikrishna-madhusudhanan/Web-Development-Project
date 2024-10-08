import { Component } from "react";
import "./navbarstyle2.css";

class Navbar2 extends Component {
   state={clicked:false};
   handleclick=()=>{
      this.setState(
         {
            clicked:!this.state.clicked
         }
      )
   }
   render(){
  return (
    <>
      <nav>      
        <a href="index.html">
          <img className="iconn" src="/images/icon22.jpg" alt="" />
         
        </a>

        <div>
          <ul id="navbar" className={
            this.state.clicked? "#navbar active":"#navbar"
          }>
            <li>
              <a className="homee" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a href="index.html">About</a>
            </li>
            <li>
              <a href="index.html">Contact</a>
            </li>
            {/* <li>
              <a href="index.html">Login</a>
            </li>
            <li>
              <a href="index.html">Signup</a>
            </li> */}
            <i className="fas fa-user-circle   proficon" style={{ fontSize: "30px", color: "white" }}></i>
            
          </ul>
        </div>

        <div id="smalldev" onClick={this.handleclick}>
          <i
            id="bar"
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        
      </nav>
      
    </>
  );
}
}

export default Navbar2;
