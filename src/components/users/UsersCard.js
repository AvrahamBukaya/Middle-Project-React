import { URI_TODOS,URI_USERS, URI_POSTS,getAll } from '../helpers/utilities'
import { useState, useEffect, useMemo} from 'react';
import User from './User';
import SearchBar from '../searchBar/SearchBar'
import Style from './Layout.module.css'
import MergeTodosPosts from '../Todos&Posts/MergeTodosPosts'
import AddNewUser from './AddUser';

const UsersCard = () => {

    const [users, setUsers] = useState([]);
    const [todos, setTodos] = useState([]);
    const [posts, setPosts] = useState([]);
    const [currentUserId, setCurrentUserId] = useState(0);
    const [query, setQuery] = useState("");
    const[showAddUser,setShowAddUser] = useState(false);



    const filteredUsers = useMemo(()=>{
        const filterByQuery = (q)=>q.name.includes(query) || q.email.includes(query);
        return users.filter(filterByQuery);
    },[users,query]);


    useEffect(()=>{
        getAll(URI_USERS)
        .then(data=>setUsers(data));
        getAll(URI_TODOS)
        .then(data=> {
            setTodos(data)})
        getAll(URI_POSTS)
        .then(data=> setPosts(data));

    },[]);


    return <div className={Style.mainContainer}> 
            <div className={Style.usersContainer}>
              <SearchBar setQuery={setQuery} cb={setShowAddUser}></SearchBar>
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