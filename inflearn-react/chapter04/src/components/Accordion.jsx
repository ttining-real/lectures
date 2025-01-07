import { useState } from "react";
import { string } from "prop-types";

function Accordion({ title, content }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 10,
          color: "white",
          fontWeight: "bold",
          background: "#666",
        }}
        onClick={() => {
          // (1)
          // setIsOpened(!isOpened);

          // (2)
          setIsOpened((state) => !state);
        }}
      >
        <div>{title}</div>
        <div>{isOpened ? "-" : "+"}</div>
      </div>
      {isOpened && (
        <div style={{ border: "1px solid #999", padding: 20 }}>{content}</div>
      )}
    </div>
  );
}

Accordion.propTypes = {
  title: string.isRequired,
  content: string,
};

export default Accordion;
