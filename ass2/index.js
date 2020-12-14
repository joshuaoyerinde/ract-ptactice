import React, {useRef} from 'react';
import Users from './Usersform'
function Index (){
    let inputreF = useRef(null);
    let inputname = useRef(null);
    let username = useRef(null);
    let arr = [];
    let formsubmit = () =>{
        let name =inputname.current.value;
        let uname = username.current.value;
        let email = inputreF.current.value
        let obj = {name,uname,email}
        console.log(obj);
        arr = [...arr,obj]
        console.log(arr);
        
    }
    return(
        <>
            <div className= "container">
                <Users submitForm={ formsubmit} input={inputreF} name={inputname} username={username}/>
            </div>
        </>
    )
}
export default Index;
