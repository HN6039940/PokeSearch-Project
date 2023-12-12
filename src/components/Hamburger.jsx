import { HamburgerWrapper } from "../assets/styles/Hamburger_Wrapper.js";
import { useSelector, useDispatch } from "react-redux";
import { toggleOverLay } from "../redux/slice/styleElementSlice.js";
const Hamburger = () => {
  const { isOpen } = useSelector((state) => state.styleElement);
  const dispatch = useDispatch();
  return (
    <HamburgerWrapper
      className={isOpen ? "open-overLay" : ""}
      onClick={() => dispatch(toggleOverLay(!isOpen))}
    >
      <div className="hamburger"></div>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
    </HamburgerWrapper>
  );
};

export default Hamburger;
