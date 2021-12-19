import React, { useState } from 'react';
import { Modal } from './components/modal/Modal';

import { Overview } from './template/overview/Overview';
import { StudentsList } from './template/students-list/StudentsList';

export const App = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [currentStudent, setCurrentStudent] = useState({});
	const [students, setStudents] = useState([
		{
			id: 1,
			photo_src: 'https://source.unsplash.com/50x50/?people',
			name: 'Petr Ivanov',
			age: 23,
			gender: 'male',
			amount: 5000,
		},
	]);

	const saveStudent = (student) => {
		const isEditableStudent = students.some((item) => item.id === student.id);

		if (isEditableStudent) {
			setStudents((prev) =>
				prev.map((item) => (item.id === student.id ? { ...item, ...student } : item))
			);
		} else {
			const id = (Date.now() + '').slice(-4);
			const photo = `https://source.unsplash.com/50x50/?${id}`;
			setStudents((prev) => [...prev, { ...student, id, photo_src: photo }]);
		}
	};

	const deleteStudent = (id) => {
		setStudents((prev) => prev.filter((item) => item.id !== id));
	};

	const editStudent = (id) => {
		const current = students.find((item) => item.id === id);

		setCurrentStudent(current);
		setModalVisible(true);
	};

	const clearStudentsList = () => {
		setStudents([]);
	};

	const onShowModal = (student) => {
		if (!student) {
			setCurrentStudent({});
		}
		setModalVisible(true);
	};

	const onHideModal = () => {
		setModalVisible(false);
	};

	const totalAmount = students.reduce((acc, student) => acc + +student.amount, 0);

	return (
		<>
			{students.length ? (
				<StudentsList students={students} deleteStudent={deleteStudent} editStudent={editStudent} />
			) : (
				<p style={{ textAlign: 'center', marginBottom: '5rem' }}>The List is Empty</p>
			)}
			<Overview
				clearStudents={clearStudentsList}
				onShowModal={onShowModal}
				total={totalAmount}
				studentsCount={students.length}
			/>

			{modalVisible && (
				<Modal onSave={saveStudent} onClose={onHideModal} currentStudent={currentStudent} />
			)}
		</>
	);
};
