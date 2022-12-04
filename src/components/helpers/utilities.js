import axios from "axios";

const URI_USERS = "http://localhost:8000/users";
const URI_POSTS = "http://localhost:8000/posts";
const URI_TODOS = "http://localhost:8000/todos";

const getAll = async(url)=>{
    const {data} = await axios.get(url);
    return data;
}

const deleteUserById = async(id)=>{
    const {data}= await axios.delete(`${URI_USERS}/${id}`);
    return data;
}

const patchData= async (url,item)=>{
    const {data} = await axios.patch(url,item);
    return data;
}

const addData = async(url,obj)=> {

    const {data} = await axios.post(url,obj);
    return data;

}




export {URI_POSTS,URI_USERS,URI_TODOS,getAll,deleteUserById,patchData,addData};


