import Style from './MergeTodosPosts.module.css'
import Task from '../task/Task'
import Post from '../post/Post'
import NewTask from '../task/NewTask'
import NewPost from '../post/NewPost'
import { useState } from 'react'

const MergeTodosPosts = ({posts,setPosts,todos,setTodos,currentUserId}) => {
    
   const [showAddPost,setShowAddPost] = useState(false);
   const [showAddTask,setShowAddTask] = useState(false);
   
    
    
    return <article className={Style.conatiner}>

             <section>        
             Todos -User {currentUserId} <button className={Style.btnAdd} onClick={()=>setShowAddTask(true)}>Add</button><br/>
                {todos.filter(t=>t.userId === currentUserId)
                .map(task=> <Task key={task.id} data={task}  cb={setTodos}></Task>)}
                {showAddTask&&<NewTask currentUserId={currentUserId} cb={setTodos} setShowForm={setShowAddTask}></NewTask>}
             </section>

             <section>
                Posts -User {currentUserId} <button className={Style.btnAdd} onClick={()=>setShowAddPost(true)}>Add</button><br/>
                {posts.filter(p=>p.userId === currentUserId) 
                .map(post=> <Post key={post.id} data={post}  cb={setPosts}></Post>)}
                {showAddPost&&<NewPost currentUserId={currentUserId} cb={setPosts} setShowForm={setShowAddPost}></NewPost>}               
             </section>
        </article>
}
 
export default MergeTodosPosts;