import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// store
import { toggleOverLay } from "../../redux/slice/styleElementSlice.js";
// components
import Navigation from "./Navigation.jsx";
import Hamburger from "../Hamburger.jsx";
import OverLay from "../OverLay.jsx";
// styles
import { NavbarWrapper } from "../../assets/styles/Navbar_Wrapper.js";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <NavbarWrapper>
      <Link
        to="/"
        style={{ textDecoration: "none" }}
        onClick={() => dispatch(toggleOverLay(false))}
      >
        <h3>
          Poke<span>Search</span>
        </h3>
      </Link>
      <nav>
        <Navigation />
      </nav>
      <Hamburger />
      <OverLay />
    </NavbarWrapper>
  );
};

export default NavBar;
