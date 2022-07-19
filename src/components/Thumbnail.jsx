import React from "react";
function Thumbnail ({title}) {
    return (
        <>
            <div className="container our">
                <div className="row">
                        <div className="col-md-12">
                            <h1 className="mosto">{title}</h1>
                       </div>
                </div>
            </div>

            <div className="container thumb ">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="thumbnail">
                            <img src="images/chicken.jpg" height="180" width="250"  alt="eldeefoods"/>
                            <div className="caption">
                                <h3 className="insurance">SHAWARMA</h3>
                                <p className="colorme">Our shawarma is carefully marinated with seasonings and spices,
                                giving it a unique taste and flavor.</p>
                           </div>
                       </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="thumbnail">
                            <img src="images/chickenandchips.jpg" height="180" width="250"  alt="eldeefoods"/>
                            <div className="caption">
                                    <h3 className="insurance">CHICKEN AND CHIPS</h3>
                                    <p className="colorme">Our chicken are fried to perfection, With cripsy and crunchy taste.
                                     Our chips are fried to perfection, With crunchy taste.
                                    </p>
                            </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="thumbnail">
                            <img src="images/smoothie.jpg" height="180" width="250"  alt="eldeefoods"/>
                            <div className="caption">
                                <h3 className="insurance">SMOOTHIE</h3>
                                <p className="colorme">Our smoothies are freshly made from natural organic fruit which has been
                                scientifically proven to be one of the healthy and safe.
                                </p>
                           </div>
                       </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="thumbnail">
                            <img src="images/milkshake.jpg" height="180" width="250"  alt="eldeefoods"/>
                            <div className="caption">
                                <h3 className="insurance">MILKSHAKE</h3>
                                <p className="colorme">Our Milkshakes are freshly made, With some nuts, fruits and dairy products
                                which also promotes healthy living.
                                </p>
                         </div>
                     </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Thumbnail;