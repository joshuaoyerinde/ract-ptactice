import React, {useState} from 'react';
import './Addv.css';
function Addvehicles(props){
    let {onaddVehicles} = props;

    let [state, setstate] = useState({});
    let setValue = (event) =>{
        state = {name:event.target.value};
        let value = 0
        state = {...state,value:value};
        // if(state){
            // event.target.value=""
        // }else{
            // event.target.value;
            // console.log("suhfu")
        // }

        // console.log(state);
    }
    return(
        <>
            <button className="btn btn-default col-md-2 float-right mt-4 bg-light  mt-3 shadow-sm" data-toggle="modal" data-target="#myModal"><div className="addv-text">Add</div></button>
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title v-text">VEHICLE COUNTER</h6>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="row justify-content-center">
                                <div className="col-md-9">
                                    <div className="form-group">
                                        <label><h6>Vehicles Name:</h6></label>
                                        <input type="text" id="demo" onChange={setValue} className="form-control" placeholder="Vehicle name"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" class="btn btn-default col-4 bg-light shadow-sm" onClick={()=>onaddVehicles(state)}>Save</button>
                        </div>
                    </div>
                </div>
                {/* <div></div>
                <div></div> */}
               
            </div>
        </>
    );
}
export default Addvehicles;