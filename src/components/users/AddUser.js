import { useState } from 'react'
import Style from './Layout.module.css'
import { v4 as uuidv4 } from 'uuid'
import { addData, URI_USERS } from '../helpers/utilities'

const AddNewUser = ({cb,setShowAddUser}) => {
   
    const[data,setData] = useState({
        id:uuidv4(),
    });

    const handleInputChanges = (e)=>{
        const {name:n,value:v} = e.target;
        setData({...data,[n]:v});
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await addData(URI_USERS,data);
        cb(prev=>[...prev,data]);
 

    }
    

    return <div className={Style.AddNewUser} onSubmit={handleSubmit}>
             <form className={Style.form}>
               {/* User id: <input type="text" value={data.id} disabled   /> <br/> */}
               Name: <input type="text" value={data.name} name="name" onChange={(e)=>handleInputChanges(e)} /> <br/>
               Email: <input type="email" value={data.email} name="email" onChange={(e)=>handleInputChanges(e)}/> <br/>
               <button type="submit">Add</button>
             </form> 
           </div>
}
 
export default AddNewUser;