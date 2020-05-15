

/**
 * ...........................................................................
 * The Data is saved in the redux storage , with the help of Reducer we
 * will get the data from storage
 * mapStateToProps take the actual redux state as parameter , from where we
 * can get the data.
 * ............................................................................
 */
import React,{Component} from 'react';
import { connect } from 'react-redux';
import '../../assets/styles.css';

class Data extends Component{
  render(){
      let data = null;
       if(this.props.userData && this.props.userData.length>0){
           let userData = this.props.userData;
           data = userData.map((user)=>{
               return(<tr key={user.id}>
                <td>{user.id}</td>
               <td>{user.name}</td>
               <td>{user.age}</td>
               <td>{user.gender}</td>
               <td>{user.email}</td>
               <td>{user.phoneNo}</td>
               </tr>)
               
           })
       }
        return(
            <div className="dashboard-data">
                <table>
                    <tbody>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    </tr>
                    {data}
                    </tbody>
                  </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       userData:state.userData
    }
}


export default connect(mapStateToProps)(Data);

