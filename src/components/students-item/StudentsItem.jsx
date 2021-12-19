import React from 'react';
import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai/';
import './StudentsItem.scss';

export const StudentsItem = ({ photo_src, id, name, age, gender, amount, onEdit, onDelete }) => {
	const genderValue = gender === 'male' ? 'Мужчина' : 'Женщина';

	const handleEditStudent = () => {
		onEdit(id);
	};
	const handleDeleteStudent = () => {
		onDelete(id);
	};

	return (
		<div className='student'>
			<img className='photo' src={photo_src} alt={name} />
			<div className='student__column column'>
				<p className='column__top'>Имя</p>
				<p className='column__bottom column__bottom_name'>{name}</p>
			</div>
			<div className='student__column column'>
				<p className='column__top'> Возраст</p>
				<p className='column__bottom column__bottom_age'>{age}</p>
			</div>
			<div className='student__column column'>
				<p className='column__top'> Пол</p>
				<p className='column__bottom column__bottom_gender'>{genderValue}</p>
			</div>
			<div className='student__column column'>
				<p className='column__top'> Оплата</p>
				<p className='column__bottom column__bottom_amount'>{amount}</p>
			</div>
			<div className='student__buttons'>
				<button className='student__button edit-button' onClick={handleEditStudent}>
					<AiOutlineEdit size={25} />
				</button>
				<button className='student__button close-button' onClick={handleDeleteStudent}>
					<AiOutlineClose size={20} />
				</button>
			</div>
		</div>
	);
};
