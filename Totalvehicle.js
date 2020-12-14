import React from 'react';
function Totalvehicle(props){
    let {total} = props
    return(
        <>
            <div className="mt-2 text-center"><span className="t-text">Total:</span><span className="total-v ml-2">{total}</span></div>
        </>
    )
}
export default Totalvehicle;