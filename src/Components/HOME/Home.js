import React, { useEffect, useState } from 'react';
import Allyogas from '../AllYogas/Allyogas';
import Questions from '../Questions/Questions';
import Sidebar from '../Sidebar/Sidebar';
import 'tw-elements';
import './Home.css';

const Home = () => {
	const [allYogas, setAllYogas] = useState([]);
	const [yogaTime, setYogaTime] = useState(0);
	// console.log(allYogas);

	useEffect(() => {
		const fetchYogasData = async () => {
			const res = await fetch('yogadata.json');
			const data = await res.json();
			setAllYogas(data);
		};
		fetchYogasData();
	}, []);

	return (
		<>
			<div id='home-page-container' className='grid grid-cols-4'>
				{/* all yoga lists section */}
				<div id='all-yogas-section ' className='grid col-span-3'>
					<Allyogas
						allYogas={allYogas}
						yogaTime={yogaTime}
						setYogaTime={setYogaTime}
					/>
					{/* Questions Container */}
					<div id='questions-section'>
						<Questions />
					</div>
				</div>
				{/* IN sidebar - yoga details section */}
				<div
					id='sidebar-yoga-details-section'
					className=' col-span-1 bg-white shadow-lg'
				>
					<Sidebar yogaTime={yogaTime} />
				</div>
			</div>
		</>
	);
};

export default Home;
