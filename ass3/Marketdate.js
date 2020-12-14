import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import './buy.css'
function Marketdate(){
    let inputdate = useRef({});
    let inputbudget = useRef({});
    let arrDate = [];
    if(localStorage.allinstance !=="" ){
        arrDate = JSON.parse(localStorage.getItem('allinstance')) || [];
    }
    
    // arrDate=getInst?getInst:[];
        // getInst!==null?arrDate=getInst:console.log("empty")
    let [msg,setmsg] = useState()
    let dateCreate = () =>{
        let date = inputdate.current.value;
        let budget = inputbudget.current.value;
        let budgetbal = inputbudget.current.value;
        if(date == ""){
            // alert("empty");
            setmsg("INput is Empty");
        }else{
            let objdate = {date, budget, budgetbal, goods:[]}
             arrDate = [...arrDate,objdate]
            localStorage.setItem('allinstance',JSON.stringify(arrDate));
            console.log(arrDate); 
            setmsg("Instace added successfully")
            inputdate.current.value = "";
        }
        
    }
    return(
        <>
            <div className="container">
                <div className="row justify-content-center p-5">
                    <div className="col-md-6">
                    <div className="modal fade p-5 my-5" id="myModal">
                        <div className="modal-dialog modal-sm">
                            <div className="modal-content">
                                {/* <div className="modal-header"> */}
                                   
                                {/* </div> */}
                                <div className="modal-body bg-box shadow-sm">
                                    <div className="text-center msg mt-3">{msg}</div> 
                                    <button  type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-4">Create instance</div>
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <input type="date" ref={inputdate} className="form-control mb-2" />
                                    <input type="number" ref={inputbudget} className="form-control mb-2" placeholder=""/>
                                    <button data-toggle="modal" data-target="#myModal" type="submit" onClick={dateCreate} className="btn btn-secondary btn-block mb-2">Create</button>
                                    {/* <button onClick={dateCreate} className="btn btn-secondary btn-block">All Instance</button> */}
                                    <Link to='/allinstance' className="form-control btn btn-secondary">View</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Marketdate;