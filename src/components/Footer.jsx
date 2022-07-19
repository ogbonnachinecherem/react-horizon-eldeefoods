import React from "react";
function Footer ({foot}) {
    return (
       <>
            <div className="footer ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-3">
                            <h5 className="visit">Visit Us in Ghana</h5>
                            <p className="country">Accra Ghana</p>
                            <p className="color">East Legon Branch<br/>Address: Bissau Ave,<br/>Phone:+233 30268 0884</p>
                       </div>
                
                
                       <div className="col-md-3">
                            <h5 className="visit">Visit Us in Nigeria</h5>
                            <p className="country">Abuja Nigeria</p>
                            <p className="color">Federal Secretariat, Phase,<br/> 3 Shehu Shagari Way<br/> Phone:+234 1 262 0727</p>
                      </div>
                
                      <div className="col-md-3">
                            <h5 className="visit">Visit Us in Kenya</h5>
                            <p className="country">Nairaobi Kenya</p>
                            <p className="color">In Sky Park<br/> PRQ2+542<br/> Phone:+254 703 084000.</p>
                      </div>
                 </div>
                 <div>
                    <p id="pfoot">{foot}</p>
                </div>
             </div>
         </div>
       </>
    );
}
export default Footer;