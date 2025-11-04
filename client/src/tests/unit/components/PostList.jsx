import React from "react";

const PostList = ({ posts }) => {
  if (!posts.length) return <p>No posts yet.</p>;

  return (
    <ul data-testid="post-list">
      {posts.map((post) => (
        <li key={post._id} className="border-b p-2">
          <h3 className="font-semibold">{post.title}</h3>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
