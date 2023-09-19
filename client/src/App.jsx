import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./App.css";
import CustomerList from "./Components/CustomerList/CustomerList";
import CustomerDetails from "./Components/CustomerDetails/CustomerDetails";
import TransferMoney from "./Components/TransferMoney/TransferMoney";
import TransferHistory from "./Components/TransferHistory/TransferHistory";
import Navbar from "./Components/Navbar/Navbar";
import Contactus from "./Components/ContactUs/Contactus";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/customer/:id" element={<CustomerDetails />} />
          <Route path="/transfer" element={<TransferMoney />} />
          <Route path="/history" element={<TransferHistory />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
