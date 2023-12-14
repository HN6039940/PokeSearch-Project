import { NavMenuWrapper } from "../../assets/styles/Navgation_Wrapper.js";
const Navigation = () => {
  return (
    <>
      <NavMenuWrapper to="/">Home</NavMenuWrapper>
      <NavMenuWrapper to="/pokemons">Pokemons</NavMenuWrapper>
      <NavMenuWrapper to="/search?q=pikachu">Search</NavMenuWrapper>
    </>
  );
};

export default Navigation;
