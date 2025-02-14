import { memo, useContext } from "react";
import "./ContactItem.css";
import { ContactDispatchContext } from "../App";

function ContactItem({ id, name, contact }) {
  const { onDelete } = useContext(ContactDispatchContext);
  const onClickRemoveButton = () => {
    onDelete(id);
  };

  return (
    <div className='ContactItem'>
      <div className='name'>{name}</div>
      <div className='contact'>{contact}</div>
      <button type='button' onClick={onClickRemoveButton}>
        🗑️ Remove
      </button>
    </div>
  );
}

export default memo(ContactItem);
