import './post.css'
export default function Post({post}){
    const {title, userId, id, body} = post
    return (
        <div className='post'>
            <h5>Title : {title}</h5>
            <p><small>UserId : {userId}</small></p>
            <p><small>PostId : {id}</small></p>
            <p>{body}</p>
        </div>
    )
}