import React, { useState } from 'react';
import logo from '../asset/mylogo.png';
import {Link} from "react-router-dom";
import './adduser.css'
function Addusers(){
    // let ss = [];
    // if(localStorage.details !=="" ){
    //     ss = JSON.parse(localStorage.getItem('details')) || [];
    // }
    let objBio = {firstname:"",lastname:"",email:"", phone:"", date:"", fbh:"", twh:""}
    let [biodata, setBiodata] = useState(objBio)
    let handleChange=(e)=>{
        let name = e.target.name
        let value = e.target.value;
        setBiodata({...biodata,[name]:value});
        // console.log(value)
    }
    let [userbio, setUserbio] = useState([]);
    if(localStorage.details !=="" ){
        userbio= JSON.parse(localStorage.getItem('details')) || [];
    }
    let handleSubmit = (e)=>{
        e.preventDefault();
        let usersBiodatas = {
                            firstname:biodata.firstname, 
                            lastname:biodata.lastname, 
                            email:biodata.email, 
                            phone:biodata.phone,
                            date:biodata.date,
                            fbh:biodata.fbh,
                            twh:biodata.twh
                            }
        userbio = [...userbio,usersBiodatas]
        // setUserbio((bio)=>{
        //         return[...bio,usersBiodatas];
        // });
        localStorage.setItem('details', JSON.stringify(userbio));
        console.log(userbio);
    }
    return(
        <>
            <div className="container">
                <div className="row justify-content-center my-5 p-1">
                    <div className="col-md-9 col-xl-9 col-sm-9">
                        <div className=" shadow-sm">
                            <div className="card-body">
                                <div className="text-center">
                                    <img src={logo} className="img-fluid" width="250px"/>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="row mx-auto">
                                        <div className="form-group  col-md-6">
                                            <input className="form-control input" onChange={handleChange} type="text" value={biodata.firstname} name="firstname" placeholder="first name"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input className="form-control input" onChange={handleChange} type="text" value={biodata.lastname} name="lastname"  placeholder="last name"/>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <input className="form-control input" onChange={handleChange} type="text" value={biodata.email} name="email"  placeholder="email"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input className="form-control input" onChange={handleChange} type="text" value={biodata.phone} name="phone"  placeholder="Phone"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input className="form-control input" onChange={handleChange} type="date" value={biodata.date} name="date"  placeholder=""/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input className="form-control input" onChange={handleChange} type="text" value={biodata.fbh} name="fbh"  placeholder="facebook handle"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input className="form-control mb-4 input" onChange={handleChange} type="" value={biodata.twh} name="twh"  placeholder="twiter handle"/>
                                        </div>
                                        <div className="form-group col-md-6 mt-3 mx-auto">
                                            <button type="submit" className="user-btn btn btn-block">Submit</button>
                                        </div>
                                        <Link to="/admin">go to admin</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Addusers;