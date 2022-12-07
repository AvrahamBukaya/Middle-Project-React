import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { addData, URI_POSTS } from '../../helpers/utilities';
import Style from '../todosPosts/MergeTodosPosts.module.css'

const NewPost = (props) => {

    const [data, setData] = useState({
        id:uuidv4(),
        userId:props.currentUserId
    });

    const handleInputChange = (e)=>{

        const {name:n,value:v}= e.target;
        setData({...data,[n]:v});
    }

    const handleSubmit =async (e)=>{
        e.preventDefault();
        await addData(URI_POSTS,data);
        props.cb(prev=>[...prev,data]);
        props.setShowForm(false);
       
    }
    

    
    return <div className={Style.cardAddNew} onClick={()=> {props.setShowForm(false)}}>
                <div onClick={e=>e.stopPropagation()}>
                New Post- User {props.currentUserId}
                <form onSubmit={handleSubmit} className={Style.form} >
                <label>
                    Title:<input type="text"  defaultValue={""} name="title" required onChange={e=>handleInputChange(e)}/>
                </label><br/>
                <label>
                Body:
                <textarea maxLength={300} placeholder="...." name="body" onChange={e=>handleInputChange(e)}>
                </textarea>
                </label> 
                <br/>
                <button type='submit'>Add</button> 
                </form>
                </div>      
            </div>
}
 
export default NewPost;