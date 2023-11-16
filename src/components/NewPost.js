import { useState } from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
export const NewPost = ({fetchPosts}) => {
    const [newPost, setNewPost] = useState({ id: uuidv4() });
    const handleChange = (e) => {
        setNewPost((prev) => ({ ...prev, content: e.target.value }));
    };
    const post = async () => {
        const response = await fetch(" http://localhost:7777/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: 0,
                content: newPost.content,
            }),
        });
        if(!response.ok) throw new Error("Network save post response was not ok")
        fetchPosts();
    };
    const handleSubmit = () => {
        post();
        
    };
    return (
        <div>
            <NavLink to="/"><button>X</button></NavLink>
            <form>
                <input
                    type="text"
                    placeholder="enter your post text or smthng"
                    onChange={handleChange}
                ></input>
                <NavLink to="/"><button onClick={handleSubmit}>Post</button></NavLink>
            </form>
        </div>
    );
};
