import { FormWrapper } from "../assets/styles/SearchBar_Wrapper.js";
const SearchBar = () => {
  return (
    <FormWrapper action="">
      <input
        type="text"
        placeholder="ex: Pikachu or ピカチュウ"
        name="q"
        className="search-text"
        required
      />
      <input
        type="submit"
        value="search"
        className="search-btn"
        onSubmit={(e) => e.preventDefault()}
      />
    </FormWrapper>
  );
};

export default SearchBar;
