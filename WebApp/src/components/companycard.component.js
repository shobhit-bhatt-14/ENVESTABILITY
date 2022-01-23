import { Link } from "react-router-dom";

const CompanyCard = () => {
  return (
    <div className="container-fluid bg-info rounded p-2 text-center">
      <h5>XYZ Ltd.</h5>
      <hr className="divider" />
      <p>Proud Investor</p>
      <br />
      <Link className="btn btn-md fw-bold btn-success" to="/company">
        💰 Invest
      </Link>
    </div>
  );
};

export default CompanyCard;
