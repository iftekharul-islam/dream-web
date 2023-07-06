import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from 'react-icons/bs';

const IconInputField = ({ labels, ids, placeholders, star, name, onChange }) => {
  const [inputFields, setInputFields] = useState([{ id: 1, name: '' }]);

  const handleAddInputField = () => {
    const newInputFields = [...inputFields, { id: Date.now(), name: '' }];
    setInputFields(newInputFields);
  };

  const handleRemoveInputField = (id) => {
    const newInputFields = inputFields.filter((field) => field.id !== id);
    setInputFields(newInputFields);
  };

  const handleInputChange = (id, value) => {
    const updatedInputFields = inputFields.map((field) => {
      if (field.id === id) {
        return { ...field, name: value };
      }
      return field;
    });
    setInputFields(updatedInputFields);
  };

  useEffect(() => {
    onChange({target:{name: name, value: inputFields}})
  }, [inputFields])

  return (
    <div className='position-relative'>
      {inputFields.map((field, index) => (
        <div className="new-input-field" key={field.id}>
          <div className="input-row">
            <label htmlFor={ids[index]}>{labels[index]} <span className='input_star'>{star}</span> </label>
            <input
              id={ids[index]}
              type="text"
              placeholder={placeholders[index]}
              value={field.name}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
            />
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

export default IconInputField;
