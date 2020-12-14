import React from 'react';
// import Controls from './Controls'
function Counter(props){
    let {vehicle,value,onincrease,index,ondecrease,onremove,onreset} = props
    return(
        <>
            <td><div className="vehicle ml-3">{vehicle}</div></td>
            <td><button className="btn btn-light shadow-sm" onClick={()=>onincrease(value,index)}><i className="fa fa-plus"></i></button></td>
            <td><div className="value">{value}</div></td>
            <td><button className="btn btn-light bg-secondry shadow-sm" onClick={()=>ondecrease(value,index)}><i className="fa fa-minus"></i></button></td>
            <td>
                <button className="btn btn-light shadow-sm" onClick={()=>onreset(value,index)}><i className="fa fa-refresh"></i></button>
                <button className="btn btn-light shadow-sm" onClick={()=>onremove(value,index)}><i className="fa fa-trash"></i></button>
            </td>
        </>

    );
}
export default Counter;