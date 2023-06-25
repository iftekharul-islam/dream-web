import React, { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from 'react-icons/bs';
import Selector from "../Selector/Selector";

const IconSelectField = ({ labels, ids, placeholders, star, options }) => {
  const [inputFields, setInputFields] = useState([{ id: 1, value: '' }]);

  const handleAddInputField = () => {
    const newInputFields = [...inputFields, { id: Date.now(), value: '' }];
    setInputFields(newInputFields);
  };

  const handleRemoveInputField = (id) => {
    const newInputFields = inputFields.filter((field) => field.id !== id);
    setInputFields(newInputFields);
  };

  const handleInputChange = (id, value) => {
    const updatedInputFields = inputFields.map((field) => {
      if (field.id === id) {
        return { ...field, value };
      }
      return field;
    });
    setInputFields(updatedInputFields);
  };

  return (
    <div className='position-relative'>
      {inputFields.map((field, index) => (
        <div className="new-input-field" key={field.id}>
          <div className="input-row">
            <label htmlFor={ids[index]}>{labels[index]} <span className='input_star'>{star}</span> </label>
            <Selector options={options?.artist} />
            {index > 0 && (
              <BsTrash
                className="delete-icon"
                onClick={() => handleRemoveInputField(field.id)}
              />
            )}
          </div>
        </div>
      ))}
      <div className="icon-input-field">
        <AiOutlinePlus className="add-icon" onClick={handleAddInputField} />
      </div>
    </div>
  );
};

export default IconSelectField;
