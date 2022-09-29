import React from 'react';

const Yogo = (props) => {
	const { yoga } = props;
	const { actName, ageLimit, actDescription, img, timeLimit } = yoga;
	const { yogaTime, setYogaTime } = props;

	return (
		<>
			<div id='yoga-card'>
				<div className='card card-compact w-full shadow-xl bg-white'>
					<figure>
						<img src={img} alt='Shoes' className='w-full h-48' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>{actName}</h2>
						<p className='text-gray-400'>
							{actDescription ? actDescription.slice(0, 50) + '...' : ''}
						</p>
						<p className='text-md font-medium'>For Age: {ageLimit}</p>
						<p className='text-md font-medium'>Time required: {timeLimit}s</p>
						<div className='card-actions justify-end'>
							<button
								className='btn bg-indigo-800 w-full '
								onClick={() => {
									handlerOnAddTimeToList(yoga);
								}}
							>
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
