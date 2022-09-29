import React from 'react';
import Allyogas from '../../../../New folder/AllYogas/Allyogas';
import Sidebar from '../../../../New folder/Sidebar/Sidebar';
import './Home.css';

const Home = () => {
	return (
		<>
			<div
				id='home-page-container'
				className='border-2 border-black grid grid-cols-4'
			>
				{/* all yoga lists section */}
				<div
					id='all-yogas-section '
					className='grid border-2 border-black col-span-3'
				>
					<Allyogas />
				</div>
				{/* IN sidebar - yoga details section */}
				<div
					id='sidebar-yoga-details-section'
					className=' col-span-1 border-2 border-red-600 bg-white'
				>
					<Sidebar />
				</div>
			</div>
		</>
	);
};

export default Home;
