import React, { useState } from 'react';

export const Input = ({ defaultValue = '', ...props }) => {
	const [value, setValue] = useState(defaultValue);

	const handleChange = ({ target }) => {
		setValue(target.value);
	};

	return <input value={value} onChange={handleChange} {...props} />;
};
