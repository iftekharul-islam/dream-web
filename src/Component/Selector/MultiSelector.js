import React from "react";
import Select from "react-select";

const MultiSelector = ({ options, onChange, name, placeholder, value, isDisabled, fieldId }) => {
  return (
    <Select
      options={options}
      onChange={e=>onChange(fieldId, e?.value)}
      placeholder={placeholder}
      value={value}
      isDisabled={isDisabled}
    />
  );
};

export default MultiSelector;
