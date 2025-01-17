import React, { useState } from "react";

const Posts = ({ posts, onAddPost }) => {
  const [postContent, setPostContent] = useState("");

  const handlePostSubmit = () => {
    if (postContent.trim()) {
      onAddPost({ 
        id: Date.now(), 
        content: postContent,
        date: new Date().toLocaleString(),
      });
      setPostContent("");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow w-full md:w-2/3 flex-none">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Posts</h3>
      <div className="mb-6">
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="Write your post here..."
          className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
        ></textarea>
        <button
          onClick={handlePostSubmit}
          className="mt-3 px-4 py-2 bg-rose-800 text-white rounded-lg hover:bg-rose-900"
        >
          Submit Post
        </button>
      </div>
      <div className="flex flex-col gap-4 max-h-64 overflow-y-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 border border-gray-200 rounded-lg bg-white break-words"
          >
            {post.content}
            <p className="mt-2 text-sm text-gray-500">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
