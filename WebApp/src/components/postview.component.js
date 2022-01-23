import { useState } from "react";

import CreatePost from "./create-post.component";
import PostList from "./post-list.component";

const PostView = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div className="container-fluid">
      <CreatePost posts={posts} setPosts={setPosts} />
      <br />
      <br />
      <PostList posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default PostView;
