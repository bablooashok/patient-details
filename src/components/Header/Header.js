import PropTypes from "prop-types";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ title, search }) => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <>
    <header className="header">
      <h1>{title}</h1>
    </header>
    <SearchBar search = {search}/>
    </>
    
  );
};
Header.defaultProps = {
  title: "Patient Details",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
