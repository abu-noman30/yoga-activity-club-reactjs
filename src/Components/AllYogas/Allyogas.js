import React from 'react';
import Banar from '../Banar/Banar';
import Yogo from '../SingleYoga/Yoga';

const Allyogas = () => {
	return (
		<>
			<div id='all-yogas-container' className='w-11/12 mx-auto'>
				<div id='banar-section'>
					<Banar />
				</div>
				<div
					id='all-yogas'
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'
				>
					<Yogo />
				</div>
			</div>
		</>
	);
};

export default Allyogas;
