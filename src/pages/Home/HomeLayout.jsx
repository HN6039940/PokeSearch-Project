import { Outlet, ScrollRestoration } from "react-router-dom";
// components
import NavBar from "../../components/nav/NavBar";
// styles
import { HomeLayoutWrapper } from "../../assets/styles/HomeLayout_Wrapper.js";

const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <HomeLayoutWrapper>
        <Outlet />
      </HomeLayoutWrapper>
      <ScrollRestoration />
    </>
  );
};

export default HomeLayout;
