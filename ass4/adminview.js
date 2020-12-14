import React, {useState,createContext, useEffect} from "react"
import './adduser.css'
import logo from '../asset/mylogo.png';
import {useHistory} from "react-router-dom";
// import Home from "./Home"
import {Link} from "react-router-dom";
export let Mycontext = createContext();
function Adminview(){

    let hist = useHistory();
    let details = JSON.parse(localStorage.getItem('details'))
    let [alldeatils,setAlld] = useState(details);
    // useEffect(()=>{
    //     // handleclick();
    //     setAlld(alldeatils);
    // },[alldeatils]);
    // setAlld(alldeatils);
    console.log(alldeatils)
    let handleclick = (data)=>{
        hist.push(`/home/${data}`);
        setAlld(alldeatils)
    }
    return(
        <>
            <nav className="header">
                <div className="my-5">
                    <h4>
                        all User
                    </h4>
                    <hr/>
                    <div className="row"> 
                        <div className="col-md-9">
                            {alldeatils.map((data,i)=>{
                                return<div  className="home-link" onClick={()=>handleclick(i)}>
                                        <div className="row no-gutters text-center mb-4">
                                            <div className="col-md-4">
                                                <img src={logo} className="img-fluid" width="70px"/>
                                            </div>
                                            <div className="col-md-5">
                                                <span>{data.fbh}</span><br></br>
                                                <span>{data.email}</span>
                                            </div>
                                        </div>
                                    </div>
                            })}
                        </div>
                    </div>
                </div>
            </nav>
            {/* <Home/> */}
        </>
    )
}
export default Adminview;