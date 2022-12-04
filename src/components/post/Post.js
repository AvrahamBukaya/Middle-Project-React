import Style from './Post.module.css'

const Post = (props) => {
    const {data} = props;

    return <div className={Style.postCard}>
        <strong>Title:</strong>{data.title}<br/>
        <strong>Body:</strong>{data.body}<br/>
    </div>
}
 
export default Post;