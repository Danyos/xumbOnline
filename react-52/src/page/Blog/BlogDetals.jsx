import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function BlogDetalis() {
    const { id } = useParams()
    const [blog, setBlog] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(res => res.json())
          .then(data => setBlog(data))
    }, [id])
    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
        </div>
    );
}

export default BlogDetalis;
