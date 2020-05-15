/**
 * ........................................................................
 * In Dashboard , there are two small components one is title and another is form.
 * table form displays the user Data
 * ..........................................................................
 */
import React,{Component} from 'react';
import Data from './data';
import Title from './title';
import {getCookie} from '../../universal';

class Dashboard extends Component{
    componentDidMount(){
        let result = getCookie();
          if(!result){
            this.props.history.push({
                pathname:'./'
            })
          }
    }

    render(){
        return(
            <div>
                <Title/>
                <Data/>
            </div>
        )
    }
}

export default Dashboard;