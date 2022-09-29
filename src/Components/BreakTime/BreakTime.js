import React, { useEffect } from 'react';
import { setDataToLocalStorage } from '../../Utilities/LocalStorage/LocalStorage';
import './BreakTime.css';

const BreakTime = (props) => {
	const { setBreakTime } = props;

	const handlerOnClickBreakTime = (e) => {
		let value = e.target.innerText;
		setBreakTime(value);

		setDataToLocalStorage(value);
	};

	useEffect(() => {
		const checkLocalStorage = localStorage.getItem('break-time');
		if (checkLocalStorage !== null) {
			setBreakTime(checkLocalStorage);
		}
	}, [setBreakTime]);

	return (
		<>
			<div id='break-btns' className='w-full py-2 px-4 bg-white'>
				<h1 className='text-lg font-bold mb-4'>Add A Break</h1>
				<div className='w-full flex flex-col justify-between '>
					<div className='rounded-lg bg-[#f2f4fa] p-3 w-full shadow-md'>
						<div className='flex items-center justify-evenly lg:justify-between  gap-2'>
							<button
								className='rounded-full bg-white w-12 h-12  text-normal font-bold shadow-md'
								onClick={(e) => {
									handlerOnClickBreakTime(e);
								}}
							>
								10s
							</button>
							<button
								className='rounded-full bg-white w-12 h-12  text-normal font-bold shadow-md'
								onClick={(e) => {
									handlerOnClickBreakTime(e);
								}}
							>
								20s
							</button>
							<button
								className='rounded-full bg-white w-12 h-12  text-normal font-bold shadow-md'
								onClick={(e) => {
									handlerOnClickBreakTime(e);
								}}
							>
								30s
							</button>
							<button
								className='rounded-full bg-white w-12 h-12  text-normal font-bold shadow-md'
								onClick={(e) => {
									handlerOnClickBreakTime(e);
								}}
							>
								40s
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BreakTime;
