import { useState, useMemo} from 'react'
import { useFetch } from '../../hooks/useFetch'
import User from './User'
import SearchBar from '../searchBar/SearchBar'
import Style from './Layout.module.css'
import MergeTodosPosts from '../todosPosts/MergeTodosPosts'
import AddNewUser from './AddUser'




const UsersCard = () => {

    const [users, setUsers,todos,setTodos,posts, setPosts ] =useFetch();
    const [currentUserId, setCurrentUserId] = useState(0);
    const [query, setQuery] = useState("");
    const[showAddUser,setShowAddUser] = useState(false);
  



    const filteredUsers = useMemo(()=>{
        const filterByQuery = (q)=>q.name.includes(query) || q.email.includes(query);
        return users.filter(filterByQuery);
    },[users,query]);



    return <div className={Style.mainContainer}> 
            <div className={Style.usersContainer}>
              <SearchBar setQuery={setQuery} cb={setShowAddUser} setCurrentUserId={setCurrentUserId}></SearchBar>
              {filteredUsers.map((u,i) => <User key={u.id} index={i} data={u} cb={setUsers}  setCurrentUserId={setCurrentUserId} todos={todos.filter(t => t.userId === u.id)}/>)}
            </div>
            <div>
               {Boolean(currentUserId)&& <MergeTodosPosts posts={posts} setPosts={setPosts} todos={todos} setTodos={setTodos}  currentUserId={currentUserId}/>}
            </div>
            <div>
                {showAddUser&&<AddNewUser cb={setUsers} setShowAddUser={setShowAddUser}></AddNewUser>}
            </div>

         </div>
         
       
    
}
 
export default UsersCard;