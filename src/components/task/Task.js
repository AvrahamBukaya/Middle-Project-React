import { memo } from 'react'
import Style from './Task.module.css'
import { URI_TODOS, patchData } from '../../helpers/utilities'

const Task = (props) => {

    const {data} = props;



    
 
    // const [markCompleted, setMarkCompleted] = useState(props.completed);
   

    const handleMarkCompleted = ()=>{
    
        // setMarkCompleted(true);
        const updateTaskObj = {...data,completed:true};
        patchData(`${URI_TODOS}/${data.id}`,updateTaskObj).then(data=>console.log(data));
        props.cb(prev=>{
           const i = prev.findIndex((v) => v.id === data.id);
           prev[i] = updateTaskObj;
           return [...prev];
        });
       

    }


    return <p className={Style.taskCard}>
    <strong>Title:</strong>{data.title}<br/>
    <strong>Completed:</strong>{data.completed?.toString()}{props.index}
    {!data.completed&&<button onClick={handleMarkCompleted}>Mark Completed</button>}
    </p>
}
 
export default memo(Task);