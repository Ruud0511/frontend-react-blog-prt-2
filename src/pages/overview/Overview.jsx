import './Overview.css'
import {useParams} from "react-router-dom";
import Blogpost from "../../constants/blogpost/Blogpost.jsx";

function Overview () {

    const {postId} = useParams()
    return (
        <>
        <h1>Hier lees je bericht {postId}</h1>
        <div>
            <span>
                    <Blogpost/>
            </span>
        </div>
        </>
    )
}

export default Overview

