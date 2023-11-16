import './App.css';
import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    
} from "react-router-dom";
import { Posts } from './components/Posts';
import { NewPost } from './components/NewPost';
import { EditPost } from './components/EditPost';
import { PostView } from './components/PostView';


function App() {
    const [posts, setPosts] = useState([]);
    const fetchPosts = async () => {
        const response = await fetch("http://localhost:7777/posts");
        const json= await response.json();
        setPosts(json)
    };
    useEffect(() => {
       fetchPosts()

    },[])


  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <div>
                <Routes>
                    <Route path="/" exact element={<Posts posts={posts} />} />
                    <Route path="/posts/new" element={<NewPost fetchPosts={fetchPosts} />} />
                    <Route path='/post/:pId' element={<PostView posts={posts} fetchPosts={fetchPosts}/>}/>
                    
                </Routes>
            </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
