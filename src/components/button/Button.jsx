import React from 'react';
import './Button.scss';

export const Button = ({ children, colorType, onClick, ...props }) => {
	const isPrimary = colorType && 'button__primary';

	return (
		<button className={`button ${isPrimary}`} onClick={onClick} {...props}>
			{children}
		</button>
	);
};
