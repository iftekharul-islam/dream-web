import React from "react";
import Select from "react-select";

const Selector = ({ options, onChange, name, placeholder, value, isDisabled }) => {
  return (
    <Select
      options={options}
      onChange={e=>onChange(name, e)}
      placeholder={placeholder}
      value={value}
      isDisabled={isDisabled}
    />
  );
};

export default Selector;
