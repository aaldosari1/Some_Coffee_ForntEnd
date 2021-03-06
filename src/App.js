import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import About from "./components/About";
import Product from "./components/Product";
import Menu from "./components/Menu";
import UserProfile from "./components/UserProfile";
import MenuDetails from "./components/MenuDetails";
import ReservationConfirm from "./components/ReservationConfirm";

import { Routes, Route } from "react-router-dom";
import Reservation from "./components/Reservation";
function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/:id" element={<MenuDetails />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/ReservationConfirm" element={<ReservationConfirm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
