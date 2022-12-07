import { useState} from 'react'
import { addData, URI_TODOS} from '../../helpers/utilities'
import { v4 as uuidv4 } from 'uuid';
import Style from '../todosPosts/MergeTodosPosts.module.css';

const NewTask = (props) => {

    const [data, setData] = useState({
        id:uuidv4(),
        userId:props.currentUserId,
        title:"",
        completed: false
   
    });

    const handleInputChange = (e)=>{
        const {name:n,value:v} = e.target;
        setData({...data,[n]:v});
    }




    const handleSubmit= async (e)=>{
        e.preventDefault();
        await addData(URI_TODOS,data)
        props.cb(prev=>[...prev,data]);
        props.setShowForm(false);
    }

   
    return <div className={Style.cardAddNew} onClick={(e)=>{props.setShowForm(false)}}>
                <div onClick={(e)=>e.stopPropagation()}>
                New Todo- User {props.currentUserId}
                <form onSubmit={handleSubmit} className={Style.form} >
                <label>
                    Title:<input type="text"  defaultValue={""} name="title" required onChange={e=>handleInputChange(e)}/>
                </label><br/>
                <label>
                Completed:
                <select name="completed"  onChange={e=>handleInputChange(e)}>
                    <option value={true} >true</option>
                    <option value={false} >false</option>
                 </select>
                 </label> 
                  <br/>
                 <button type='submit'>Add</button> 
                </form>
                </div>      
            </div>
}
 
export default NewTask;