import { Post } from "./Post";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    RouterProvider,
} from "react-router-dom";
import { NewPost } from "./NewPost";
import { useEffect, useState } from "react";
import { NewPostBar } from "./NewPostBar";

export const Posts = ({posts}) => {
    

    

    return (
        <div>
            <NewPostBar />
            
            {posts.map((post) => (
                <Post post={post} />
            ))}
        </div>
    );
};
