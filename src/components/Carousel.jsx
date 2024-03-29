import React from "react";
function Carousel (){
    return (
       <>
          <section id="sec2">
              <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="images/rest4.jpg" className="d-block w-100" height="550" alt="..."/>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Welcome to Eldeefoods</h1>
                        <h5>At Eldee Office, we believe that the beauty of life lies in the little things that give us a better expression of ourselves, make us more social and connect emotionally..</h5>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="images/rest3.jpg" className="d-block w-100" height="550" alt="..."/>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>With Universal Experience</h1>
                        <h5>A healthy way of living</h5>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="images/rest3.jpg" className="d-block w-100" height="550" alt="..."/>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>OUR RESERVATION</h1>
                            <h5>❝The secret is at the table❞</h5>
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </button>
            </div>
     </section>
       </>
    );
}
export default Carousel;