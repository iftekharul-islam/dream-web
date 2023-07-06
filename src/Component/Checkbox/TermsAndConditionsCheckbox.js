import React from 'react';

const TermsAndConditionsCheckbox = ({isChecked, setIsChecked}) => {  

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          style={{ marginRight: '8px' }}
        />
        <span style={{ fontSize: '14px' }}>
          I agree to the terms and conditions
        </span>
      </label>
    </div>
  );
};

export default TermsAndConditionsCheckbox;
