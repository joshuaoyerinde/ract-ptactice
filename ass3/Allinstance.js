import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Allinstance(){

    let allInst = JSON.parse(localStorage.getItem('allinstance'));
    let [stateInst, setstate] = useState(allInst)
    // console.log(stateInst);
    return(
        <>
            <div className="container">
                <div className="row p-2 mt-4 justify-content-center">
                    <div className="col-md-6 col-lg-6 col-sm-6">
                        <div className="display-4 text-center mb-3 col-12">All date Instance</div>
                        <div className="shadow-sm">
                            <div className="card-body">
                                {stateInst.map((date,i)=>{
                                    return <div key={i}>
                                            <Link to={`/view/${date.date}`} className="shadow-sm form-control btn-outline-secondary btn mb-2">{date.date}</Link>
                                    </div>
                                })}
                            </div>
                        </div>
                        <Link to="/" className="shadow-sm form-control btn-outline-secondary btn mb-2">back to create</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Allinstance;