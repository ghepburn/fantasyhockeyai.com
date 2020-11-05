import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./index/Navbar";
import Footer from "./index/Footer";

import Home from "./home/Home";
import Admin from "./services/admin/Admin";
import Dashboard from "./services/dashboard/Dashboard";

import AdminRoute from "./services/security/routes/AdminRoute";

const Main = () => {
    return (  
        <div className="main">

            <Router>
                <Navbar />
                
                <Switch>
                    <AdminRoute path="/admin" component={Admin} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>

            <Footer />
        </div>
    );
}
 
export default Main;