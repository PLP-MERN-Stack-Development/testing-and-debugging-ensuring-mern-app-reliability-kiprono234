import React, { useState, useEffect } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import { fetchPosts, createPost } from "./api/posts";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    getPosts();
  }, []);

  const handleAddPost = async (newPost) => {
    const created = await createPost(newPost);
    setPosts((prev) => [created, ...prev]);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">🧪 MERN Posts</h1>
      <PostForm onAddPost={handleAddPost} />
      <PostList posts={posts} />
    </div>
  );
};

export default App;
