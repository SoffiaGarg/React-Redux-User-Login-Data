import React , {Component} from 'react';
import '../../assets/styles.css';


class Button extends Component{
  render(){
        return(
               <button onClick={this.props.onClickHandler} className="button" type="submit">Submit</button>
             
        )
    }
}
export default Button;