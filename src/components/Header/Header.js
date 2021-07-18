import PropTypes from "prop-types";
import Button from "../Button/Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <input type="text" />
      {/* <Button color="green" text="search" onClick={onClick} /> */}
    </header>
  );
};
Header.defaultProps = {
  title: "Patient Details",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
