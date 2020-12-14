import React from 'react';
import {Link} from 'react-router-dom'
function Createmarket(){
    // let arrDate =[];
    
    let getInst = localStorage.getItem('allinstance');
    getInst!==null?console.log("nice"):localStorage.setItem('allinstance',[]);
    return(
        <>
           <div className="container mt-5 p-5">
                <div className="row  justify-content-center">
                    <div className="col-md-7">
                    <h6 className="text-center mb-3">Instance Todo</h6>
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <Link to='/marketdate' className="form-control btn  btn-outline-secondary mb-2">Create</Link>
                                    <Link to='/allinstance' className="form-control btn btn-secondary">View Allinstance</Link>
                                {/* loremvujiifuiefuieuiuieruieruieruiuieruieruieruiuieruieruieruieruiuiiu */}

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
           </div>
        </>
    )
}
export default Createmarket;
