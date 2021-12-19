import { useState } from 'react';

export const useForm = (initialState, cb) => {
	const [formData, setFormData] = useState(initialState);
	const [error, setError] = useState('');

	const handleChange = (e) => {
		const inputName = e.target.name;
		const inputValue = e.target.value;

		setFormData((prev) => ({ ...prev, [inputName]: inputValue }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		cb();
	};

	return { formData, handleChange, handleSubmit };
};
