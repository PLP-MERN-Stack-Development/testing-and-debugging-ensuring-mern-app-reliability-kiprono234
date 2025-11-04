export const fetchPosts = async () => {
    const res = await fetch("http://localhost:5000/api/posts");
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
  };
  
  export const createPost = async (postData) => {
    const res = await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    if (!res.ok) throw new Error("Failed to create post");
    return res.json();
  };
  