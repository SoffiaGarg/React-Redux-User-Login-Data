/**
 * On click of logout button , session got Expired and user will redirect to login page.
 * 
 */
import React, { Component } from 'react';
import '../../assets/styles.css';
import {removeCookie} from '../../universal';
import { withRouter} from "react-router-dom";

class Title extends Component{
    onClickHandler = ()=>{
        console.log("okay");
        removeCookie();
        this.props.history.push({
            pathname:'./'
        })
    }
    render(){
        return(
            <div className="dashboard-title">
            <h2>Dashboard</h2>
            <button onClick={this.onClickHandler} type="submit">Logout</button>
          </div>
        )
    }
}

export default withRouter(Title);