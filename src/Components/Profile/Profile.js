import React from 'react';

const Profile = () => {
	return (
		<>
			<div id='profile'>
				<div className=' w-full py-2 px-4 bg-white '>
					<div className='flex flex-row items-center gap-8 my-4 mb-8'>
						<img
							src='https://images.unsplash.com/photo-1642903635601-28d681eca8db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzE3fHx5b2dhJTIwcG9zZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60'
							className='w-16 h-16 rounded-xl object-cover'
							alt=''
						/>
						<div classNameName='h-28 w-full flex flex-col justify-center'>
							<p className='text-gray-800  text-xl font-medium'>John Jackson</p>
							<p className='text-gray-400 text-xs'>FullStack dev</p>

							<p className='text-gray-400 text-x flex items-center'>
								<svg
									width='10'
									height='10'
									fill='currentColor'
									className='h-4 w-4 mr-2'
									viewBox='0 0 1792 1792'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z'></path>
								</svg>
								Nantes
							</p>
						</div>
					</div>
					<div className='w-full flex flex-col justify-between '>
						<div className='rounded-lg bg-[#f2f4fa] p-3 w-full'>
							<div className='flex items-center justify-between'>
								<div className='flex flex-col items-center text-xl font-bold'>
									<p>
										75<span className='text-gray-400 text-sm'>kg</span>
									</p>
									<p className='text-gray-500 text-base font-normal'>Weight</p>
								</div>
								<div className='flex flex-col items-center text-xl font-bold'>
									<p>7.5</p>
									<p className='text-gray-500 text-base font-normal'>Height</p>
								</div>
								<div className='flex flex-col items-center text-xl font-bold'>
									<p>
										26<span className='text-gray-400 text-sm'>yrs</span>
									</p>
									<p className='text-gray-500 text-base font-normal'>Age</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			;
		</>
	);
};

export default Profile;
