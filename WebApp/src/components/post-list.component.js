import Post from "./post.component";

const PostList = (props) => {
  return (
    <div className="col-md-8 mx-auto border border-secondary border-2 rounded p-2 bg-light">
      {props.posts.map((post) => (
        <Post
          key={post.message}
          message={post.message}
          url={post.url}
          posts={props.posts}
          setPosts={props.setPosts}
        />
      ))}
    </div>
  );
};

export default PostList;
