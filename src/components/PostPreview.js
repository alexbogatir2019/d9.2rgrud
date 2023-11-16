import { NavLink, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { EditPost } from "./EditPost";
import { PostView } from "./PostView";

export const PostPreview = ({ post, editTurn, handleClickEdit}) => {
    
    return (
        <div>
            <NavLink to={`/post/${post.id}`}><p>{post.content}</p></NavLink>
            
        </div>
    );
};
