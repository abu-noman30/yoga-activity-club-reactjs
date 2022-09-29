import React from 'react';
import BreakTime from '../BreakTime/BreakTime';
import TimeDetails from '../TimeDetails/TimeDetails';
import './YogaDetails.css';

const YogaDetails = (props) => {
	const { yogaTime } = props;
	return (
		<>
			<div id='yoga-details'>
				{/* Break Container */}
				<div id='break-btns-container'>
					<BreakTime />
				</div>
				{/* Time Details Container */}
				<div id='time-details-container'>
					<TimeDetails yogaTime={yogaTime} />
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
