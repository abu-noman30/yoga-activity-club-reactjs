import React from 'react';
import * as FAIcons from 'react-icons/fa';

const Profile = () => {
	return (
		<>
			<div id='profile'>
				<div className=' w-full px-4 bg-white mb-4 '>
					<div className='flex flex-row items-center gap-8 mb-2'>
						<img
							src='https://images.unsplash.com/photo-1465218550585-6d069382d2a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHlvZ2ElMjBwZXJzb258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
							className='w-16 h-16 rounded-xl object-cover'
							alt=''
						/>
						<div className='h-28 w-full flex flex-col justify-center'>
							<p className='text-gray-800  text-xl font-medium'>NOMAN</p>
							<p className='text-gray-400 text-x'>Yoga Trainer</p>

							<p className='text-gray-400 text-xs flex items-center pb-[0.3rem]'>
								<FAIcons.FaMapMarkerAlt className='text-gray-400 text-xs' />
								Dhaka, Bangladesh
							</p>
						</div>
					</div>
					<div className='w-full flex flex-col justify-between  '>
						<div className='rounded-lg bg-[#f2f4fa] p-3 w-full shadow-md '>
							<div className='flex items-center justify-evenly lg:justify-between'>
								<div className='flex flex-col items-center text-xl font-bold'>
									<p>
										75<span className='text-gray-400 text-sm'>kg</span>
									</p>
									<p className='text-gray-500 text-base font-normal'>Weight</p>
								</div>
								<div className='flex flex-col items-center text-xl font-bold'>
									<p>5.7</p>
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
		</>
	);
};

export default Profile;
