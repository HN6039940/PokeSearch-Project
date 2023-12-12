import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// store
import { initializeUrl } from "../../redux/slice/pokemonsListSlice";
// components
import Button from "../../components/btn/Button.jsx";
// styles
import { LandingPageWrapper } from "../../assets/styles/LandingPage_Wrapper.js";

const LandingPage = () => {
  const dispatch = useDispatch();
  return (
    <LandingPageWrapper>
      <div>
        <h1>ポケサーチへようこそ！</h1>
        <h3>ポケモンやベリーを検索してみてください。</h3>
        <p>Welcome to PokeSearch!</p>
      </div>
      <Link
        to="/pokemons"
        onClick={() => dispatch(initializeUrl())}
        className="Link-container"
      >
        <Button text="使用する" />
      </Link>
    </LandingPageWrapper>
  );
};

export default LandingPage;
