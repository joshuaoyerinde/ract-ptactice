import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import Index from './ass4';
import Addusers from './ass4/Addusers';
import Adminview from './ass4/adminview';
import Home from './ass4/Home';
// import View from './ass4/View';
// pages
// import Home from './ass3/Home';
// import Marketdate from './ass3/Marketdate';
// import Createmarket from './ass3/Createmarket';
// import Home from './ass3/Home';
// import Allinstance from './ass3/Allinstance';
// import Buycomp from './ass3/Buycomp';
// import Viewdateinst from './ass3/View';
// import Viewbuy from './ass3/Viewbuy';

function RouteCom(){
    return(
        <React.Fragment>
            <Router>
               
                <Switch>
                    <Route path="/" exact component={Addusers}/>
                    <Route path="/home/:id" exact component={Home}/>
                    <Route path="/admin" exact component={Adminview}/>
                    {/* <Route path="view/" exact component={View}/> */}
                    {/* <Route path="/" exact component={Home}/>
                    <Route path="/marketdate" exact component={Marketdate}/>
                    <Route path="/allinstance" exact component={Allinstance}/>
                    <Route path="/view/:date" exact component={Viewdateinst}/>
                    <Route path="/buydetails/:date/:id" exact component={Viewbuy}/>
                    <Route path="/buy/:d" exact component={Buycomp}/> */}
                </Switch>
            </Router>
        </React.Fragment>
    )
}
export default RouteCom;