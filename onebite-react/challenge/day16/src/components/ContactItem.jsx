import { memo } from "react";
import "./ContactItem.css";

function ContactItem({ id, name, contact, onDelete }) {
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
