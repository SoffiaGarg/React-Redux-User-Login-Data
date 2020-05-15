import React , {Component} from 'react';
import '../../assets/styles.css';
import {connect} from 'react-redux';

class Input extends Component{
    render(){
        let inputType = this.props.type || 'text';
        return(
               <input onChange={this.props.onChangeHandler} className="inputBox" type={inputType} name={this.props.name} placeholder={this.props.name}/>
             
        )
    }
}

const mapDispatchToProps = dispatch=>{
 return{
     onChangeHandler:(event)=> {
         console.log("===",event.target.name,event.target.value);
         dispatch({
         type:'INPUT',
         payload:{
             [event.target.name]:event.target.value
         }
     })
    }
    
}
};

export default connect(null,mapDispatchToProps)(Input);