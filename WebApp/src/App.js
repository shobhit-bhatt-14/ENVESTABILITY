import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar.component";
import MainScreen from "./components/mainscreen.component";
import CompanyList from "./components/company-list.component";
import Company from "./components/company.component";
import Payment from "./components/payment.component";

const App = () => {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <br />
      <br />
      <Routes>
        <Route exact path="/" element={<MainScreen />} />
        <Route path="/company-list" element={<CompanyList />} />
        <Route path="/company" element={<Company />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
