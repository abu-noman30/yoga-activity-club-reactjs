import React from 'react';

const Yogo = () => {
	return (
		<>
			<div id='yoga-card'>
				<div className='card card-compact w-full shadow-xl bg-white'>
					<figure>
						<img src='https://placeimg.com/400/225/arch' alt='Shoes' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>Shoes!</h2>
						<p className='text-gray-400'>
							If a dog chews shoes whose shoes does he choose?
						</p>
						<p className='text-md font-medium'>For Age: 20-30</p>
						<p className='text-md font-medium'>Time required: 30s</p>
						<div className='card-actions justify-end'>
							<button className='btn bg-indigo-800 w-full '>
								Add Time to list
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Yogo;
