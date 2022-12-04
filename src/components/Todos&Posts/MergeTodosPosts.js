import Style from './MergeTodosPosts.module.css'
import Task from '../task/Task'
import Post from '../post/Post'
import NewTask from '../task/NewTask'

const MergeTodosPosts = ({posts,setPosts,todos,setTodos,showForm,setShowForm, currentUserId}) => {
    

    
    
    return <article className={Style.conatiner}>
             <section>        
             Todos -User {currentUserId} <button className={Style.btnAdd} onClick={()=>setShowForm(true)}>Add</button><br/>
                {todos.filter(t=>t.userId === currentUserId)
                .map(task=> <Task key={task.id} data={task}  cb={setTodos}></Task>)}
                {showForm&&<NewTask currentUserId={currentUserId} cb={setTodos} setShowForm={setShowForm}></NewTask>}
             </section>
             <section>
                Posts -User {currentUserId} <button className={Style.btnAdd} onClick={()=>setShowForm(true)}>Add</button><br/>
                {posts.filter(p=>p.userId === currentUserId)
                .map(post=> <Post key={post.id} data={post}  cb={setPosts}></Post>)}
                {/* {showForm&&<NewTask currentUserId={currentUserId} cb={setTodos} setShowForm={setShowForm}></NewTask>} */}
               
             </section>
        </article>
}
 
export default MergeTodosPosts;