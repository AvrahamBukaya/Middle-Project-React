import { useState} from 'react'
import { addData, URI_TODOS} from '../helpers/utilities'
import uuid  from 'react-uuid'
import Style from './Task.module.css';

const NewTask = (props) => {

    const [data, setData] = useState({
        id:uuid(),
        userId:props.currentUserId,
        title:"",
        completed: false
   
    });

    const handleInputChange = (e)=>{
        const {name:n,value:v} = e.target;
        setData({...data,[n]:v});
    }




    const handleSubmit= (e)=>{
        e.preventDefault();
        addData(URI_TODOS,data)
        .then(data=>console.log(data));
        props.cb(prev=>[...prev,data]);
        props.setShowForm(false);
    }

   
    return <div className={Style.cardNewTask}>
                <div>
                New Todo- User {props.currentUserId}
                <form onSubmit={handleSubmit} className={Style.form} >
                <label>
                    Title:<input type="text"  defaultValue={""} name="title" required onChange={e=>handleInputChange(e)}/>
                </label><br/>
                <label>
                Completed:
                <select name="completed" onChange={e=>handleInputChange(e)}>
                    <option  value={true}  >true</option>
                    <option   value={false} >false</option>
                 </select>
                 </label> 
                  <br/>
                 <button type='submit'>Add</button> 
                </form>
                </div>      
            </div>
}
 
export default NewTask;