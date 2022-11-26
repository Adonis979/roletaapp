import React, {Component} from "react";
import NavBar from "./navbar";
import Jumbotron from "./jumbotron";
import Footer from "./footer";
import {Route, Redirect, Switch} from "react-router-dom";
import OutsideBlinds from "./outsideBlindForm";
import StoreForm from "./storeForm";
import VenetianeForm from "./venetianeForm";
import AboutUs from "./aboutUs";

class Routing extends Component{
    render() {
        return(<React.Fragment>
                <NavBar></NavBar>
                <Switch>
                    <Route path="/home" component={Jumbotron}/>
                    <Route path="/outside-blinds" component={OutsideBlinds}/>
                    <Route path="/store" component={StoreForm}/>
                    <Route path="/venetiane" component={VenetianeForm}/>
                    <Route path="/about-us" component={AboutUs}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}

export default Routing;