import React from "react";
function Navbar () {
    return (
       <>
         <section id="sec1">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  <nav class="navbar navbar-expand-lg navbar-light ">
                          <a class="navbar-brand" href="index.html"><span>EldeeFoods</span></a>
                          <button class="navbar-toggler" type="button" data-toggle="collapse" 
                          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                          aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span></button>

                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                          <li class="nav-item active">
                            <a class="nav-link" href="index.html">Home</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link " href="#about">About US</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact Us</a>
                          </li>
                       </ul>
                     </div>
                </nav>
             </div>
            </div>
          </div>
     </section>
      </>
    );
}
export default Navbar;