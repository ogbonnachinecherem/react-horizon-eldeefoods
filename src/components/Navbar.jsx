import React from "react";
function Navbar () {
    return (
       <>
         <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
                <a className="navbar-brand" href="index.html">
                    <img src="images/logo2.png" width="250" height="100" className="d-inline-block align-top" alt="eldeefoods"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#about">About US</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact Us</a>
                    </li>
                    </ul>
                </div>
          </nav>
      </>
    );
}
export default Navbar;