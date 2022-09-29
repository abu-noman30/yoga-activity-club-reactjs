import React, { useEffect, useState } from 'react';
import 'tw-elements';
import Allyogas from '../AllYogas/Allyogas';
import Banar from '../Banar/Banar';
import Questions from '../Questions/Questions';
import Sidebar from '../Sidebar/Sidebar';
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
				{/* Banner Section-for Medium & Small Devices */}
				<div className='col-span-4 w-10/12 mx-auto lg:hidden'>
					<Banar />
				</div>
				{/* all yoga lists section */}
				<div
					id='all-yogas-section '
					className='grid col-span-4 md:col-span-4 lg:col-span-3 order-2 lg:order-1 mt-8 lg:mt-0'
				>
					<Allyogas
						allYogas={allYogas}
						yogaTime={yogaTime}
						setYogaTime={setYogaTime}
					/>
					{/* Questions Container */}
					<div id='questions-section' className='order-3'>
						<Questions />
					</div>
				</div>
				{/* IN sidebar - yoga details section */}
				<div
					id='sidebar-yoga-details-section'
					className=' col-span-4  md:col-span-4 md:w-10/12 md:mx-auto lg:col-span-1 bg-white shadow-lg order-1 lg:order-2 rounded-2xl lg:rounded-none'
				>
					<Sidebar yogaTime={yogaTime} />
				</div>
			</div>
		</>
	);
};

export default Home;
