import CompanyCard from "./companycard.component";

const CompanyList = () => {
  return (
    <div className="container col-8">
      <br />
      <br />
      <div className="row d-flex justify-content-evenly">
        <div className="col-5">
          <CompanyCard />
        </div>
        <div className="col-5">
          <CompanyCard />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="row d-flex justify-content-evenly">
        <div className="col-5">
          <CompanyCard />
        </div>
        <div className="col-5">
          <CompanyCard />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default CompanyList;
