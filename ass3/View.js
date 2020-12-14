import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import './buy.css';
function Viewdateinst() {
    let {date} = useParams();
    let getItem = JSON.parse(localStorage.getItem('allinstance')) || [];
    console.log(getItem);
    let [item, setItem] = useState(getItem);
    let finditem = item.find(f =>f.date == date);
    // setItem(setItem);
    // console.log(find.goods);
    let ondeleteItem = (id)=>{
        // console.log(item,id);
        let filteritem = finditem.goods.filter(r => r !==id);
        let filtergoods = item.map((eachinst,f) => eachinst.date == date?{...eachinst,goods:filteritem}:eachinst);
    //    let filtergoods = item.map((eachinst,i) => eachinst.date == date?{...eachinst,goods:eachinst.goods.filter(r => r !==id)}:eachinst);
        localStorage.setItem('allinstance',JSON.stringify(filtergoods));
       setItem(filtergoods);
    }
    let gettotal
    let arrtot = new Array();
    // let getall;
    let [Tot,settotal] = useState(arrtot);

    let [total, setTotal] = useState(0);
    let handlechange = (index)=>{
       let getState = item.map((mm,i) => mm.date == date?{...mm,goods:mm.goods.map((st,i) =>i == index?{...st,status:"done"}:st)}:mm);
        // console.log(getState);
        let fd = item.find(u =>u.date == date);
        let addpriceQant = fd.goods.filter(g=>g.price);
        addpriceQant.forEach(element => {
            gettotal = element.price * element.quantity;
            // console.log(gettotal)
           Tot = [...Tot,gettotal];
            console.log(Tot);
        });
        Tot = Tot.reduce((x,y)=>{return x+y})
        console.log(Tot);
        setTotal(Tot);
        // setItem (arrtot)
        // console.log( addpriceQant);
        setItem(getState);
        localStorage.setItem('allinstance',JSON.stringify(getState));
    }
    return(
        <>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-6 col-sm-6">
                    <div className="text-center view-title mb-3">All Item For {date}</div>
                        <div className="shadow-sm">
                            <div className="table-responsive">
                                <div></div>
                                <table className="table my-2 table-hover table-borderless">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>View</th>
                                            <th>Action</th>
                                            <th>status</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {finditem.goods.map((item,id)=>{
                                        return <tr key={id}>
                                                    <td>{id}</td>
                                                    <td>{item.name}</td>
                                                    <td>₦{item.price}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>
                                                        <Link to={`/buydetails/${date}/${id}`} className="btn btn-secondary "><i className="fa fa-eye"></i></Link>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-secondary ml-2" onClick={()=>ondeleteItem(item,id)}><i className="fa fa-trash"></i></button>
                                                    </td>
                                                    <td>{item.status}</td>
                                                    <td>
                                                        <button onClick={()=>handlechange(id)}>buy</button>
                                                    </td>
                                                </tr>
                                        
                                        })}
                                     <div>{ total }</div>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                            <div><Link to={`/buy/${date}`} className="btn btn-secondary ml-3 mb-3 mt-3">Add</Link></div>
                        <Link to="/allinstance" className="form-control btn-outline-secondary btn my-5">back to instance</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Viewdateinst;