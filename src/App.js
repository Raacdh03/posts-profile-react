import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Posts from "./components/Posts";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [postCount, setPostCount] = useState(0);

  const userData = {
    name: "Kim Jiwon",
    email: "jiwonnie@example.com",
    photo: "https://i.pinimg.com/736x/70/a0/0b/70a00b22d3c28187112a6ddae7c96d53.jpg",
  };

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  useEffect(() => {
    setPostCount(posts.length);
  }, [posts]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header user={userData} />
      <div className="flex flex-col mr-5 md:flex-row gap-6 p-6 items-start">
        <Posts posts={posts} onAddPost={handleAddPost} />
        <Profile user={userData} postCount={postCount}/>
      </div>
    </div>
  );
};

export default App;
