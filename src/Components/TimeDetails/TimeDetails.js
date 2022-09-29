import React from 'react';

const TimeDetails = (props) => {
	const { yogaTime } = props;
	return (
		<>
			<div id='time-details' className='w-full py-2 px-4 bg-white'>
				<h1 className='text-lg font-bold mb-4'>Exercise Details</h1>
				<div className='w-full flex flex-col justify-between '>
					<div className='rounded-lg bg-[#f2f4fa] p-3 w-full mb-4 flex items-center justify-between'>
						<span className='text-lg font-bold'>Exersise Time</span>
						<span className='text-normal font-normal'> {yogaTime} Second</span>
					</div>
					<div className='rounded-lg bg-[#f2f4fa] p-3 w-full mb-4 flex items-center justify-between'>
						<span className='text-lg font-bold'>Break Time</span>
						<span className='text-normal font-normal'> 20 Second</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default TimeDetails;
