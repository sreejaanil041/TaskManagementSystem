import React from 'react'
import axios from 'axios';
import {configpath} from '../utils/config';
import {useHistory} from 'react-router-dom';

export default function CreateTask() {

    
  AddTask=()=>{
    
    let data = new FormData();
data.append('task', this.state.task);
data.append('description', this.state.description);


    // let formdata = {category:this.state.category, name:this.state.name, description:this.state.description, image:this.state.image}
     console.log('name: ',data );
 if(this.props.match.params.id!==undefined) 
       {
      axios.put(configpath +'/'+ this.props.match.params.id, data,{
      headers: {
      'Content-Type': 'application/json',
      //'Authorization': token
      }
  })  

  
.then((response) => {
  console.log(response);
if(response.data.status==='success'){  
this.props.history.push('/create/') 
}
  alert(response.data.message);  

}, (error) => {
  console.log(error);
    }) 
       }
       else{

    axios.post(configpath, data,{
      headers: {
      'Content-Type': 'application/json',
      //'Authorization': token
      }
  })  

  
.then((response) => {
  console.log(response);
if(response.data.status==='success'){  
this.props.history.push('/create/') 
}
  alert(response.data.message);  

}, (error) => {
  console.log(error);
    }) 
       }  
     }

     
handleChange= (e)=> {  
  this.setState({[e.target.name]:e.target.value});  
  }  

  
  return (
    <div>
        <h1>Task Management System</h1>
        <table>
            <tr>
                <td>Task</td>
                <td><input type ="text" name ="taskname" onChange={handleChange} value={this.state.task}/></td>
            </tr>

            <tr>
                <td>Task Description</td>
                <td><input type ="text" name ="taskdesc" onChange={handleChange} value={this.state.task_desc}/></td>
            </tr>

            <tr>
                <td></td>
                <td><input type ="submit" value ="Add Task" onSubmit={this.AddTask}/></td>
            </tr>
        </table>
    </div>
  )
}

