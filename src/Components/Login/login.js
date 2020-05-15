/**
 * .....................................................................................
 * Validations :-
 * Email or Password cant be empty ,
 * email and password must match with the login details that is present is our json file.
 * (from the json , we are keeping that in Redux Store)
 * .......................................................................................
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/styles.css';
import { Introduction, Input, Button } from './';
import Popup from '../Basic-Components/popup';
import { withRouter} from "react-router-dom";
import {setCookie,getCookie} from '../../universal';


class Login extends Component {
    state={
        popup:false,
        errorMsg:null
    }

    onClosePopup = ()=>{
        this.setState({
            popup:false,
            errorMsg:null
        })
    }
  
      onClickHandler = ()=>{
          if(!this.props.email){
             this.setState({
                 popup:true,
                 errorMsg:'Email is Empty'
             })
          }else if(!this.props.password){
              this.setState({
                  popup:true,
                  errorMsg:'Password is Empty'
              })
          }else{
              if(this.props.email === this.props.validEmail){
                  if(this.props.password === this.props.validPassword){
                      setCookie();
                      this.props.history.push({
                          pathname:'./dashboard'
                      })
                  }else{
                      this.setState({
                          popup:true,
                          errorMsg:'Password is Wrong'
                      })
                  }
              }else{
                  this.setState({
                      popup:true,
                      errorMsg:'Email is Wrong'
                  })
              }
          }
      }

      componentDidMount(){
          //check if user already signed in
          let result = getCookie();
          if(result){
            this.props.history.push({
                pathname:'./dashboard'
            })
          }
      }
    render() {
        let popup=null;
        if(this.state.popup){
            popup= <Popup message={this.state.errorMsg} onClosePopup={this.onClosePopup}/>
        }
        return (
            <div className="login">
                 <Introduction/>
                <div className="loginForm">
                    <div className="form">
                        <h4> Login</h4>
                        <Input name="email" />
                        <Input name="password" type="password" />
                        <Button onClickHandler = {this.onClickHandler}/>
                        {popup}
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        email: state.email,
        password: state.password,
        validEmail:state.loginData.email,
        validPassword:state.loginData.password
    }
}
export default withRouter(connect(mapStateToProps,null)(Login));


