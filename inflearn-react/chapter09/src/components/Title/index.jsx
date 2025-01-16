import { any } from "prop-types";

function Title({ children }) {
  return <h1>{children}</h1>;
}

Title.propTypes = {
  children: any,
};

export default Title;
