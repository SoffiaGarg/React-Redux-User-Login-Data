
/**
 * In login page , this the the design of left side.
 */
import React from 'react';
import '../../assets/styles.css';
import logo from '../../assets/images/logo-white.png'


const Introduction = ()=>{
    return(
        <div className="login-text">
                 <img src= {logo} alt="logo"/>
                 <div className = "welcome">
                    <h4 className="title">Welcome !</h4>
                    <p className="paragraph">Largest growing company, over 3000 employee</p>
                    <p className="paragraph">With atmost satisfaction</p>
                 </div>
             </div>
    )
}
export default Introduction;