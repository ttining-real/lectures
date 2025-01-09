import "./index.css";
import { func } from "prop-types";

function SideBarFooter({ onClick }) {
  return (
    <div className='SideBarFooter'>
      <button onClick={onClick}>+ 메모 생성하기</button>
    </div>
  );
}

SideBarFooter.propTypes = {
  onClick: func,
};

export default SideBarFooter;
