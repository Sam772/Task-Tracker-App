import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="black" text="Add Task" />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker App",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
