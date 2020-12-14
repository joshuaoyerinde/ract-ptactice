import React from 'react';
function Users (props){
    let { submitForm,input,name,username} = props;

    return(
        <>
            <div className= "row justify-content-center">
                <div className="col-md-6 p-4 shadow-sm mt-5">
                    <div className="display-4 text-center">Form</div>
                    {/* <form onSubmit={submitForm}> */}
                        <div className="form-group">
                            <input className="form-control" ref={name}  placeholder="name"/><br/>
                            <input className="form-control" ref={username} placeholder="username"/><br/>
                            <input className="form-control " ref={input} placeholder="email"/>
                        </div>
                        <div className="form-group">
                           <button type="submit" onClick={submitForm} className="btn-primary btn-block">Submit</button>
                        </div>
                    {/* </form> */}
                </div>
            </div>
        </>
    )
}
export default Users;
