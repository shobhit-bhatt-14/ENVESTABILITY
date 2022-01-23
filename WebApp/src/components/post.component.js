import { useState } from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);

  const deleteHandler = () => {
    props.setPosts(props.posts.filter((p) => p.message !== props.message));
  };

  return (
    <div className="container-fluid mx-auto bg-secondary mb-4 rounded-3 p-3">
      <div className="container-lg bg-white rounded border border-dark my-2">
        <p className="text-info text-wrap fw-bold fs-5 text-break">
          {" "}
          {props.message}{" "}
        </p>
        <img className="col-5" src={props.url} />
      </div>
      <br />
      <div className="d-flex justify-content-evenly">
        <div className="col-5 d-flex justify-content-around">
          <button
            className={`btn btn-md fw-bold ${
              yes ? "bg-primary text-white" : "bg-white"
            }`}
            onClick={() => {
              setYes(true);
              setNo(false);
            }}
          >
            🔼 Yes
          </button>
          <button
            className={`btn btn-md fw-bold ${
              no ? "bg-primary text-white" : "bg-white"
            }`}
            onClick={() => {
              setYes(false);
              setNo(true);
            }}
          >
            🔽 No
          </button>
        </div>
        <div className="col-7 d-flex justify-content-around">
          <button
            className="btn btn-danger btn-md fw-bold"
            onClick={deleteHandler}
          >
            🗑️ Delete
          </button>
          <Link className="btn btn-md fw-bold btn-success" to="/company-list">
            💰 Invest
          </Link>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Post;
