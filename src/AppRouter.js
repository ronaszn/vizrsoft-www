import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import SubPage from './SubPage';
import ContactUs from './ContactUs';


class AppRouter extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <Router>
                <div>
                    <Route path="/" render={(props)=><HomeLayout {...props}/>}/>
                    <Route exact path="/sub-page" component={SubPage} />
                    <Route exact path="/sub-page" component={ContactUs} />
                    {/* more Route components are to be added here for different pages */}
                </div>
            </Router>
        )
    }
}

export default AppRouter;