import { useState } from 'react'

import {  } from '../helpers/utilities';

const NewPost = () => {
    
    const [data, setData] = useState({});
    
    return <div className={Style.cardNewTask}>
                <div>
                New Post- User {props.currentUserId}
                <form onSubmit={handleSubmit} className={Style.form} >
                <label>
                    Title:<input type="text"  defaultValue={""} name="title" required onChange={e=>handleInputChange(e)}/>
                </label><br/>
                <label>
                Body:
                <textarea maxLength={300} placeholder="....">
                </textarea>
                </label> 
                <br/>
                <button type='submit'>Add</button> 
                </form>
                </div>      
            </div>
}
 
export default NewPost;