import { EditPost } from "./EditPost";

import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const PostView = ({ posts, fetchPosts }) => {
    const { pId } = useParams();
    const [post, setPost] = useState({});
    const [editTurn, setEditTurn] = useState(false);
    // Use the pId parameter to display the post with the corresponding ID

    useEffect(() => {
        setPost(posts.find((post) => post.id == pId));
    }, [pId]);
    const savePost = async () => {
        const response = await fetch(" http://localhost:7777/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: post.id,
                content: post.content,
            }),
        });
        if (!response.ok)
            throw new Error("Network save post response was not ok");
        fetchPosts();
    };
    const handleChange = (e) => {
        setPost((prev) => ({ ...prev, content: e.target.value }));
    };
    const handleClick = () => {
        setEditTurn(!editTurn);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        savePost();
        setEditTurn(!editTurn);
    };
    const deletePost = async () => {
        const response = await fetch(`http://localhost:7777/posts/${pId}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Network delete response was not ok");
        }
        fetchPosts();
    };
    const handleDelete = () => {
        deletePost();
    };
    return (
        <div>
            {editTurn ? (
                <>
                    <button onClick={handleClick}>X</button>
                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleChange}
                            value={post.content}
                        ></input>
                        <button type="submit">Save</button>
                    </form>
                </>
            ) : (
                <>
                    
                    <NavLink to="/">
                        <button>X</button>
                    </NavLink>
                    <p>{post.content}</p>
                    <button onClick={handleClick}>Edit</button>
                    <NavLink to="/">
                        <button onClick={handleDelete}>Delete</button>
                    </NavLink>
                </>
            )}
        </div>
    );
};
