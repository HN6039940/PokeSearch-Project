import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// store
import { toggleOverLay } from "../redux/slice/styleElementSlice.js";
// styles
import { OverLayWrapper } from "../assets/styles/OverLayNavigation_Wrapper.js";

const OverLay = () => {
  const { isOpen } = useSelector((state) => state.styleElement);
  const dispatch = useDispatch();
  return (
    <OverLayWrapper
      onClick={() => dispatch(toggleOverLay(false))}
      className={isOpen ? "open-overLay" : ""}
    >
      <div className="overlay-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Pokemons">Pokemons</NavLink>
        <NavLink to="/search?q=pikachu">Search</NavLink>
      </div>
    </OverLayWrapper>
  );
};

export default OverLay;
