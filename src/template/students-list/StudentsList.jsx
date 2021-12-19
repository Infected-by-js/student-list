import React from 'react';
import { StudentsItem } from '../../components/students-item/StudentsItem';

import './StudentsList.scss';

export const StudentsList = ({ students, editStudent, deleteStudent, ...props }) => {
	return (
		<div className='students-list'>
			<ul>
				{students.map((student) => (
					<li key={student.id}>
						<StudentsItem {...student} onEdit={editStudent} onDelete={deleteStudent} />
					</li>
				))}
			</ul>
		</div>
	);
};
