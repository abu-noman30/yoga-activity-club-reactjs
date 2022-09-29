import React from 'react';
import * as GRIcons from 'react-icons/gr';
import './Banar.css';

const Banar = () => {
	return (
		<>
			<div id='banar-title-container' className='my-12'>
				<h1 className='mb-4 text-2xl font-extrabold text-blue-900 md:text-3xl lg:text-4xl'>
					<span className='text-transparent bg-clip-text bg-gradient-to-r to-blue-400 from-blue-900'>
						<span>
							<GRIcons.GrYoga />
						</span>
						YOGA-VIBES-
					</span>
					<span className='text-transparent bg-clip-text bg-gradient-to-r to-blue-900 from-blue-400'>
						CLUB
					</span>
				</h1>
				<h1 className='mb-4 font-bold tracking-tight leading-none text-gray-900 md:text-xl lg:text-xl block'>
					Select today’s yoga
				</h1>
			</div>
		</>
	);
};

export default Banar;
