import React, { useEffect, useState } from 'react';
import Adminview from './adminview';
import {useParams} from "react-router-dom";
import logo from '../asset/mylogo.png';
import './adduser.css'
import {Link} from "react-router-dom";
// import gg from ''
function Home(){
    let {id} = useParams();
    let getDetails = JSON.parse(localStorage.getItem('details'));
    let [bdata,setBdata] = useState(getDetails);
    let editbio = bdata.find((data,i)=> i == id);
    let [biodata,setBiodata] = useState(editbio);
    
    useEffect(()=>{
        editbio = bdata.find((data,i)=> i == id);
        setBiodata(editbio);
        console.log( biodata);
    //    setBiodata(biodata)
    });
    let handleEdit =(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        console.log(editbio)
        setBiodata({...biodata,[name]:value});
    }
    // setBiodata(editbio)
    // for disabled input.....
    let [dis,setdis] = useState();
    // let setDetails = JSON.parse(localStorage.getItem('details'));
    let [edit,setEdit] = useState();
    let handleclick =()=>{
        edit = bdata.map((each,index)=>index == id ?{...each,
                                                firstname:biodata.firstname, 
                                                lastname:biodata.lastname, 
                                                email:biodata.email, 
                                                phone:biodata.phone,
                                                date:biodata.date,
                                                fbh:biodata.fbh,
                                                twh:biodata.twh 
                                            }:each);

            // biodata = biodata.find((each,index)=> index ==id)
         
            // setBdata(editbio)
            localStorage.setItem('details',JSON.stringify(edit));
            // console.log(edit);
        setdis(dis = true);
        // alert("jndvnjdjn")
    }
    
    
        // console.log(findDetails);
        // setBiodata(findDetails)
    return(
        <>
            <Adminview/>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-xl-9 col-sm-9 mx-auto">
                        <div className="shadow-md">
                            <div className="card-body">
                            <div className="text-center">
                                    <img src={logo} className="img-fluid" width="230px"/>
                                </div>
                                {/* <form> */}
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <input type="text"  name="firstname" onChange={handleEdit} value={biodata.firstname} disabled={dis?false:true} className="home-input form-control" placeholder="First name"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="text" name="lastname" onChange={handleEdit} value={biodata.lastname} disabled={dis?false:true} className="home-input form-control"  placeholder="last name"/>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <input type="text" name="email" onChange={handleEdit} value={biodata.email}  disabled={dis?false:true} className="home-input form-control"  placeholder="Email "/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="text" name="phone" onChange={handleEdit} value={biodata.phone}  disabled={dis?false:true} className="home-input form-control"  placeholder="phone"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input  type="date" name="date" onChange={handleEdit} value={biodata.date}  disabled={dis?false:true} className="home-input form-control" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="text" name="fbh" onChange={handleEdit} value={biodata.fbh}  disabled={dis?false:true} className="home-input form-control"  placeholder="Facebook Handle"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="text" name="twh" onChange={handleEdit} value={biodata.twh}  disabled={dis?false:true} className="home-input form-control"  placeholder="Twiter"/>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <button className="btn user-btn col-7" onClick={handleclick}>{dis?<div>Save</div>:<div>Edit</div>}</button>
                                        </div>
                                    </div>
                                    <Link to="/admin">Go back to users</Link>
                                {id}  im a man
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
                     <div></div>
                </div>
            </div>
        </>
    )
}
export default Home;