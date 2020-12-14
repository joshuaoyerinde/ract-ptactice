import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {useParams} from 'react-router-dom';
function Viewbuy() {
    let {date,id} = useParams();
    let getAllInst = JSON.parse(localStorage.getItem('allinstance'));
    // console.log(getAllInst);
    let[allinst,setInst] = useState(getAllInst);
    let goodsdetails = allinst.find(r =>r.date == date);
    let showitem = goodsdetails.goods[id] 
    console.log(showitem)
    // let tt = allinst[id];
    // console.log(tt);
    // let showitem = allinst.map((d,i) => d.date == date);
    // showitem.filter(g => g.goods);
    // console.log(dd);
    // let filtergoods = showitem.map((g,i) => g.goods);
    // console.log(allinst);
    // console.log(showitem);
    return(
        <>
            <div className="container">
                <div className="row justify-content-center my-5">
                    <div className="col-md-8 col-xl-8 col-sm-8">
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                                <div>
                                    <li class="list-group-item bg-secondary text-white">Details for each items </li>
                                    <ul className="list-group list-group-item">
                                        <li className="d-flex align-items-center">
                                        name:
                                        <h4><span class="badge badge-secondary ml-2">{showitem.name}</span></h4>
                                            
                                        </li>
                                        <li className="d-flex align-items-center">
                                        price:
                                            <h4 className="ml-4">
                                                <span class="badge badge-secondary badge-pill">₦{showitem.price}</span>
                                            </h4>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            quantity:
                                            <h4 className="ml-4">
                                                <span class="badge badge-secondary badge-pill">{showitem.quantity}</span>
                                            </h4>
                                        </li>
                                    </ul>
                                    <Link to={`/view/${date}`} className="form-control btn  mt-2 btn-outline-secondary">Back to items</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Viewbuy;