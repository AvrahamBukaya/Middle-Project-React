import { useState, useEffect} from 'react';

import { getAll, URI_USERS, URI_POSTS,URI_TODOS } from '../helpers/utilities'

export const useFetch = () => {

    const [users, setUsers] = useState([]);
    const [todos, setTodos] = useState([]);
    const [posts, setPosts] = useState([]);
    
    useEffect(()=>{
        getAll(URI_USERS)
        .then(data=>setUsers(data));
        getAll(URI_TODOS)
        .then(data=> {
            setTodos(data)})
        getAll(URI_POSTS)
        .then(data=> setPosts(data));

    },[]);

    return [users, setUsers,todos, setTodos,posts, setPosts];
}
 
