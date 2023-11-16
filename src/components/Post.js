import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { PostView } from "./PostView";
import { EditPost } from "./EditPost";
import { PostPreview } from "./PostPreview";

export const Post = ({ post }) => {
    const [editTurn, setEditTurn] = useState(false);
    const handleClickEdit = () => {
        setEditTurn(!editTurn);
    };

    return (
        <div>
            
                <PostPreview post={post} editTurn={editTurn} handleClickEdit={handleClickEdit}/>
                
        </div>
    );
};
