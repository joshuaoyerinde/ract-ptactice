import React,{ useState, useRef} from 'react'
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom'
import './buy.css'
function Buycomp() {
    // let msg = useRef(null);
    let objGoods ={name:"",price:"",quantity:"", status:"ready"}
    let [buygoods, setBuy] = useState(objGoods);
    let handleChange = (e) =>{
        let name = e.target.name;
        let price = e.target.price;
        let quantity = e.target.quantity;
       let value = e.target.value;
    //    let ampay = Number(price);
    //    ampay = price*quantity
    //    console.log(ampay);
    //  {...buygoods, buygoods.price * buygoods.quantity};
    console.log(buygoods);
       setBuy((old)=>{
            return{...old,[name]:value, [price]:price, [quantity]:quantity}
       })
    }
    let [info, setInfo] = useState()
    let {d} = useParams();
    let instanceArr = JSON.parse(localStorage.getItem('allinstance'));
    let [state, setstate] = useState(instanceArr)
    let handleSubmit = (e) =>{
        e.preventDefault();
        if(buygoods.name!=="" && buygoods.price!==""){
            let dd = {name:buygoods.name, price:buygoods.price, quantity:buygoods.quantity, status:"ready"};
            // let ii = objGoods.price * objGoods.quantity;
            // console.log(ii);
            let newState = state.map((eachinst,i) => eachinst.date == d ? {...eachinst, goods:[...eachinst.goods,dd]}:eachinst);
            localStorage.setItem('allinstance',JSON.stringify(newState));
            setInfo("Goods is added");
            setstate(newState);
            // console.log(newState);
        }else{
            console.log("empty");
            // msg =  <h3>iojedgjioergjioerio</h3>
            setInfo("The input is empty.......");
        }
        // console.log(new)
    }
    
    return(
        <>
            <div className="container my-5">
                <div className="row p-4 justify-content-center">
                    <div className="col-md-6">
                    <div className="text-center buy-title mb-3">Buy Goods for {d}</div>
                    <div className="modal fade p-5 my-5" id="myModal">
                        <div className="modal-dialog modal-sm">
                            <div className="modal-content">
                                {/* <div className="modal-header"> */}
                                   
                                {/* </div> */}
                                <div className="modal-body bg-box shadow-sm">
                                    <div className="text-center msg mt-3">{info}</div> 
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input name="name"  value={buygoods.name} onChange={handleChange} className="form-control mb-2" placeholder="productname"/>
                                <input type="number" name="price" value={buygoods.price} onChange={handleChange}  className="form-control mb-2" placeholder="price"/>
                                <input type="number" name="quantity" value={buygoods.quantity}    onChange={handleChange}  className="form-control mb-2" placeholder="Quantity"/>
                                <button data-toggle="modal" data-target="#myModal" type="submit"  className="form-control btn-outline-secondary">Add {d}</button>
                            </div>
                        </form>
                        <Link to={`/view/${d}`} className="nav-link text-secondary">Back to View</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Buycomp;