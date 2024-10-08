import { Component } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./navbarStyles.css";

class Navbar extends Component {
  state = { clicked: false };

  handleclick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <>
        <nav>
          <a href="index.html">
            <img className="iconn" src="/images/icon22.jpg" alt="Logo" />
          </a>

          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <Link className="homee" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                {/* Update to use Link for SPA navigation */}
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Signup</Link>
              </li>
              <i
                className="fas fa-user-circle proficon"
                style={{ fontSize: "30px", color: "white" }}
              ></i>
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

export default Navbar;
