import {memo, useState,useMemo} from 'react';
import EncapsulatedUserdata from './EncapsulatedUserdata';
import Style from './Layout.module.css';
import { deleteUserById, patchData, URI_USERS } from '../helpers/utilities'

const User = (props) => {

    const[dataIndetails, setDataInDetails] = useState(false);
    const[user, setUser] = useState(props.data);
 

    const tasksNotCompleted = useMemo(()=>{
        const condition = (task)=> !task.completed
        return props.todos.some(condition);
    },[props.todos]);

    const handleClick = ()=>{
        setDataInDetails(!dataIndetails);
    }

    const updateData = (e)=>{
        const {name:n, value:v} = e.target;
        switch(n){
            case 'city':
                setUser(prev => {
                    return {...prev,address:{...prev.address,[n]:v}} });
                break;
            
            case 'street':
                setUser(prev => {
                    return {...prev,address:{...prev.address,[n]:v}} });
                break;
            case 'zipcode':
                setUser(prev => {
                    return {...prev,address:{...prev.address,[n]:v}} });
                break;   
            default:
               setUser(prev=> {
                return {...prev,[n]:v}
               })          
            }
    }

    const handleDelete = async()=>{
        const r = await deleteUserById(user.id);
        console.log(r);
        props.cb(prev=>[...prev.filter((item) => item.id !== user.id)]);
    }
    const handleupdate = async()=>{
        const d =  await patchData(`${URI_USERS}/${user.id}`,user);
        props.cb(prev=>{
            prev[props.index] = d;
            return [...prev];
        });
    }

 

    function renderUser(){

        return <p className={`${Style.cardContainer} ${Style.card} ${tasksNotCompleted?Style.notCompleted:Style.completed}`}> 
            <label onClick={()=>props.setCurrentUserId(user.id)}>ID:{user.id}</label>
            <label>Name: <input type="text" defaultValue={user.name} name="name"  onChange={updateData}/></label>
            <label>Email: <input type="email"  defaultValue={user.email}   name="email" onChange={updateData}/></label>
            <div>
            <button onClick={handleClick}>Other Data</button>
            {dataIndetails&& <EncapsulatedUserdata address={user.address} updateData={updateData}></EncapsulatedUserdata>}
                <button className={Style.curdBtn} onClick={handleupdate}>Update</button>
                <button className={Style.curdBtn} onClick={handleDelete}>Delete</button>
            </div> 
        </p>

    }



    return renderUser();
}
 
export default memo(User);