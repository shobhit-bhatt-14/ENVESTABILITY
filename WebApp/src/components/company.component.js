import { Link } from "react-router-dom";

const Company = () => {
  return (
    <div className="container col-8 d-flex justify-content-evenly">
      <div className="col-5 text-center">
        <img src="" alt="avatar" />
        <p>Make a investment that matters.</p>
        <div className="container">
          <h6>Worth : 100.06 Cr</h6>
        </div>
      </div>
      <br />
      <div className="vr"></div>
      <br />
      <div className="col-5 text-center">
        <h1>⭐⭐⭐⭐⭐</h1>
        <br />
        <br />
        <Link className="btn btn-md fw-bold btn-success" to="/payment">
          💲 Pay
        </Link>
      </div>
    </div>
  );
};

export default Company;
