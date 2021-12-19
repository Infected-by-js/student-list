import React from 'react';
import './InfoBlock.scss';

export const InfoBlock = ({ bange, total, color, ...props }) => {
	return (
		<div className='info-block' {...props}>
			<p className='info-block__title'>{bange}</p>
			<span className={`info-block__total  ${color ? 'primary' : ''}`}>{total}</span>
		</div>
	);
};
