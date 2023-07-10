import React from 'react';

const CalenderField = ({ label, star, value, placeholder, onChange, type, error, disabled, name, min = null }) => {
  const inputId = label.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className='mt-3'>
      <label htmlFor={inputId} className='mb-2' key={inputId}>
        {label} <span className='input_star'>{star}</span>
      </label>
      <input
        id={inputId}
        type='date'
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
        disabled={disabled} // Set the disabled attribute based on the prop
        min={min}
      />
      {error && <p className="input_error">{error}</p>}
    </div>
  );
};

export default CalenderField;
