import { useEffect} from "react";

const Blog = () => {

    useEffect(() => {
        fetch(`blogs.json`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h2>Blogs</h2>
        </div>
    );
};

export default Blog;