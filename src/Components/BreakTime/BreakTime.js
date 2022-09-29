import React from 'react';

const BreakTime = () => {
	return (
		<>
			<div id='break-btns' className='w-full py-2 px-4 bg-white'>
				<h1 className='text-lg font-bold mb-4'>Add A Break</h1>
				<div className='w-full flex flex-col justify-between '>
					<div className='rounded-lg bg-[#f2f4fa] p-3 w-full'>
						<div className='flex items-center justify-between gap-2'>
							<div className='flex flex-col items-center text-normal font-bold'>
								<button className='rounded-full bg-white w-12 h-12'>10s</button>
							</div>
							<div className='flex flex-col items-center text-normal font-bold'>
								<button className='rounded-full bg-white w-12 h-12'>20s</button>
							</div>
							<div className='flex flex-col items-center text-normal font-bold'>
								<button className='rounded-full bg-white w-12 h-12'>30s</button>
							</div>
							<div className='flex flex-col items-center text-normal font-bold'>
								<button className='rounded-full bg-white w-12 h-12'>40s</button>
							</div>
							<div className='flex flex-col items-center text-normal font-bold'>
								<button className='rounded-full bg-white w-12 h-12'>50s</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BreakTime;
