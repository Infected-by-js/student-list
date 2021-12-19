import React from 'react';

import { InfoBlock } from '../../components/info-block/InfoBlock';
import { Button } from '../../components/button/Button';

import './Overview.scss';

export const Overview = ({ total, studentsCount, onShowModal, clearStudents }) => {
	const handleOpenModal = () => {
		onShowModal();
	};

	const handleClearList = () => {
		clearStudents();
	};

	return (
		<div className='overview'>
			<InfoBlock bange='Общий доход:' total={total} color='primary' />
			<InfoBlock bange='Всего записано:' total={studentsCount} />

			<div className='overview__buttons'>
				<Button colorType='primary' onClick={handleOpenModal}>
					Добавить студента
				</Button>
				<Button onClick={handleClearList}>Очистить список</Button>
			</div>
		</div>
	);
};
