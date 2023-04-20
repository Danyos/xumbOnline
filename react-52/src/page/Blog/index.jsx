import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function BlogIndex() {
    const [post, setpost]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json()).then(result=>setpost(result))


    },[])


    return (
        <div>
            <h1>This is the BlogIndex page</h1>
            <div className='postAll'>
                    {post.map(post=>
                        <div key={post.id} className="post">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                                <Link to={`/blog/${post.id}`}>Read more</Link>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default BlogIndex;
