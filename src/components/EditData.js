import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
     
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter company name"
          name="company"
          value={editFormData.company}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Update</button>
      </td>
    </tr>
  );
};

export default EditableRow;
