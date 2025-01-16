import { any } from "prop-types";

function Desc({ children }) {
  return <h4>{children}</h4>;
}

Desc.propTypes = {
  children: any,
};

export default Desc;
