import { useEffect, useState } from "react"
import Post from "./Post"
export default function Pots(){
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
            <h3>Pots : {posts.length}</h3>
           {
            posts.map(post => <Post post={post}></Post>)
           }
        </div>
    )
}

/**
 * 1.create a state to store the data
 * 2. create use Effect with no dependencies
 * 3.use fetch to load data
 */