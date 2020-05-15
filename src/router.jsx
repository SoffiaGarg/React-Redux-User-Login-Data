import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from './Components/Login/login';
import Dashboard from './Components/Dashboard/dashboard';

class RouterClass extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
            </BrowserRouter>
        );
    }}
export default RouterClass;