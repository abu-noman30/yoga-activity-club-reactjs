import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BreakTime from '../BreakTime/BreakTime';
import TimeDetails from '../TimeDetails/TimeDetails';
import './YogaDetails.css';

const YogaDetails = (props) => {
	const { yogaTime } = props;
	const [breakTime, setBreakTime] = useState('0');

	const notifyToast = () => {
		toast('Congrats! You have completed your yoga session!!! 🎉🎉🎉');
	};
	return (
		<>
			<div id='yoga-details'>
				{/* Break Container */}
				<div id='break-btns-container'>
					<BreakTime breakTime={breakTime} setBreakTime={setBreakTime} />
				</div>
				{/* Time Details Container */}
				<div id='time-details-container'>
					<TimeDetails yogaTime={yogaTime} breakTime={breakTime} />
				</div>

				<div id='toast-btn' className='px-4'>
					<div className='card-actions justify-end'>
						<button className='btn bg-indigo-800 w-full ' onClick={notifyToast}>
							Activity Completed
						</button>
						<ToastContainer position='top-center' />
					</div>
				</div>
			</div>
		</>
	);
};

export default YogaDetails;
