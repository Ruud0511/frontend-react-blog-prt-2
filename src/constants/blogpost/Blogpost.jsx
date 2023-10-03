import posts from '../../constants/data.json';
import {useState} from "react";

function BlogPost() {
    console.log(posts);
    const [data, getData] = useState('')
    return (
        <>
            {
                posts.map (data => {
                    return (
                        <div>
                           <div>{data.title} ({data.author})</div>
                           <div>{data.comments} reacties - {data.shares} gedeeld</div>
                        </div>
                    )
                }
                )
            }
        </>
    );
}

export default BlogPost;