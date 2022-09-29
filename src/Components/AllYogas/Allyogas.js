import React from 'react';
import Banar from '../Banar/Banar';
import Yogo from '../SingleYoga/Yoga';

const Allyogas = (props) => {
	const { yogaTime, setYogaTime } = props;
	const { allYogas } = props;
	return (
		<>
			<div id='all-yogas-container' className='w-10/12 mx-auto'>
				<div id='banar-section'>
					<Banar />
				</div>
				<div
					id='all-yogas'
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'
				>
					{allYogas.map((yoga) => (
						<Yogo
							key={yoga.id}
							yoga={yoga}
							yogaTime={yogaTime}
							setYogaTime={setYogaTime}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Allyogas;
