import React from "react";
import "../App.css";

const ReadOnlyRow = ({ contact, handleEditClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.company}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}>
          <i class="fas fa-user-edit"></i>
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
