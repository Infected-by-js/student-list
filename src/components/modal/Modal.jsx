import React from 'react';
import { AiOutlineClose } from 'react-icons/ai/';
import { useForm } from '../../hooks/useForm';
import { Button } from '../button/Button';

import './Modal.scss';

export const Modal = ({ currentStudent = {}, onSave, onClose }) => {
	const { formData, handleChange, handleSubmit } = useForm(currentStudent, () => {
		onSave({ ...formData, gender: formData.gender ? formData.gender : 'male' });
		onClose();
	});

	return (
		<div className='modal'>
			<div className='overlay' onClick={onClose} />
			<form className='form' onSubmit={handleSubmit}>
				<div className='form__header header'>
					<input
						type='text'
						className='header__input-name'
						name='name'
						placeholder='Введите имя и фамилию'
						value={formData.name || ''}
						onChange={handleChange}
						required
					/>
					<button className='header__button close-button' type='button' onClick={onClose}>
						<AiOutlineClose size={30} />
					</button>
				</div>
				<div className='form__body body'>
					<input
						type='number'
						className='body__age'
						name='age'
						placeholder='Возраст'
						value={formData.age || ''}
						onChange={handleChange}
						required
					/>
					<select
						name='gender'
						className='body__gender'
						onChange={handleChange}
						value={formData.gender}
					>
						<option disabled>Пол</option>
						<option value='male'>Мужчина</option>
						<option value='female'>Женщина</option>
					</select>
					<input
						type='number'
						className='body__amount'
						name='amount'
						placeholder='Оплата'
						value={formData.amount || ''}
						onChange={handleChange}
						required
					/>
				</div>

				<Button type='submit' colorType='primary'>
					Добавить
				</Button>
			</form>
		</div>
	);
};
