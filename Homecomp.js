import React,{useState} from 'react';
import Counter from './Counter';
import Controls from './Controls'
import Addvehicle from './Addvehicle';
import Totalvehicle from './Totalvehicle';
import './Home.css';
function Homecomp(){
    let [vehicles, setVehicles] = useState([]);
    let detV=JSON.parse(localStorage.getItem('vehicles'));
    detV!==""?vehicles=detV: console.log("empty");
    let addVehicles = (vehicleObj) =>{
        vehicles = [...vehicles,vehicleObj]
        localStorage.setItem('vehicles',JSON.stringify(vehicles));
        // alert("uosviov");
        setVehicles(vehicles)
        console.log(vehicles);
        document.getElementById("demo").value = ""
    }
    let vehicleIncrease=(value,index)=>{
            let vehicleArr = vehicles.map((v,i)=> i == index?{...v,value:value+=1}:v);
            localStorage.setItem('vehicles',JSON.stringify(vehicleArr));
            setVehicles(vehicleArr);
    }
    let veDecrease=(value,index)=>{
        if(vehicles[index].value == 0){
            return 0;
        }else{
            let vehicleArr = vehicles.map((v,i)=> i == index?{...v,value:value-=1}:v);
            localStorage.setItem('vehicles',JSON.stringify(vehicleArr));
            setVehicles(vehicleArr);
        }
    }
    let reset=(resetvalue,index)=>{
        let vehicleArr = vehicles.map((v,i)=> i == index?{...v,value:resetvalue=0}:v);
        localStorage.setItem('vehicles',JSON.stringify(vehicleArr));
        setVehicles(vehicleArr);
    }
    
    let remove = (value,i) =>{
            let truncate = vehicles.filter((r,k) => k !==i);
            localStorage.setItem('vehicles',JSON.stringify(truncate))
            setVehicles(truncate);
            // alert("jksd")
    }
    let arr= new Array();
    let vv
    let totalVehicle = 0
    let totalv = vehicles.filter(v => v.value);
    totalv.forEach(element =>{
       vv = element.value;
       arr = [...arr,vv]
    })
   totalVehicle =  arr.reduce((x,y)=>{return x+y});
    // console.log(totalVehicle);
    // setVehicles(totalVehicle)
 

    return(
        <>
            <div className="container mt-5">
            <div className="text-center">
               <div className="text-head">MAXBRAIZ VEHICLE COUNTER APP</div> 
            </div>
            <div className="row mt-5 justify-content-center">
                <div className="col-md-9 mx-auto">
                    <Controls/>
                    <div className="card border-0 shadow-md">
                      <div className="card-body">
                        <div className ="counter-table">
                            <table  className="table table-borderless table-hover ">
                                <thead>
                                    <tr>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vehicles.map((v,id)=>{
                                        return <tr key={id} className="card-header  border-0 mt-3 shadow-sm">
                                                    <Counter onreset={reset} onremove={remove} onincrease = {vehicleIncrease} ondecrease={veDecrease} index={id} value = {v.value} vehicle = {v.name}/>
                                                </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <Totalvehicle total={totalVehicle}/>
                        {/* <div>{totalVehicle}</div> */}
                      </div>  
                    </div>
                </div>
            </div>
                <Addvehicle onaddVehicles={addVehicles}/>
            </div>
        </>
    );

}
export default Homecomp; 