import React from 'react';
import './YogaDetails.css';

const YogaDetails = () => {
	return (
		<>
			<div id='yoga-details'>
				{/* Break Container */}
				<div id='break-container' className='w-full py-2 px-4 bg-white mb-8'>
					<h1 className='text-lg font-bold mb-4'>Add A Break</h1>
					<div className='w-full flex flex-col justify-between '>
						<div className='rounded-lg bg-[#f2f4fa] p-3 w-full'>
							<div className='flex items-center justify-between gap-2'>
								<div className='flex flex-col items-center text-normal font-bold'>
									<button className='rounded-full bg-white w-12 h-12'>
										10s
									</button>
								</div>
								<div className='flex flex-col items-center text-normal font-bold'>
									<button className='rounded-full bg-white w-12 h-12'>
										20s
									</button>
								</div>
								<div className='flex flex-col items-center text-normal font-bold'>
									<button className='rounded-full bg-white w-12 h-12'>
										30s
									</button>
								</div>
								<div className='flex flex-col items-center text-normal font-bold'>
									<button className='rounded-full bg-white w-12 h-12'>
										40s
									</button>
								</div>
								<div className='flex flex-col items-center text-normal font-bold'>
									<button className='rounded-full bg-white w-12 h-12'>
										50s
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Details Container */}
				<div id='details' className='w-full py-2 px-4 bg-white mb-8'>
					<h1 className='text-lg font-bold mb-4'>Add A Break</h1>
					<div className='w-full flex flex-col justify-between '>
						<div className='rounded-lg bg-[#f2f4fa] p-3 w-full mb-4 flex items-center justify-between'>
							<span className='text-lg font-bold'>Exersise Time</span>
							<span className='text-normal font-normal'> 200Second</span>
						</div>
						<div className='rounded-lg bg-[#f2f4fa] p-3 w-full mb-4 flex items-center justify-between'>
							<span className='text-lg font-bold'>Break Time</span>
							<span className='text-normal font-normal'> 20Second</span>
						</div>
					</div>
				</div>

				<div id='toast-btn' className='px-4'>
					<div className='card-actions justify-end'>
						<button className='btn bg-indigo-800 w-full '>
							Activity Completed
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default YogaDetails;
