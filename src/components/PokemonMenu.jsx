import PropTypes from "prop-types";
import {
  PokemonMenuWrapper,
  PokemonLinkWrapper,
} from "../assets/styles/PokemonMenu_Wrapper.js";

const PokemonMenu = ({ id, enName, jpName, sprites }) => {
  return (
    <PokemonMenuWrapper>
      <PokemonLinkWrapper
        to={`/pokemon/${id}?name=${jpName}&enName=${enName}`}
        state={{ enName, jpName }}
      >
        <h3>{jpName}</h3>
        <h4>{enName}</h4>
        <img src={sprites} alt={enName} />
      </PokemonLinkWrapper>
    </PokemonMenuWrapper>
  );
};

PokemonMenu.propTypes = {
  id: PropTypes.number.isRequired,
  enName: PropTypes.string.isRequired,
  jpName: PropTypes.string.isRequired,
  sprites: PropTypes.string.isRequired,
};

export default PokemonMenu;
