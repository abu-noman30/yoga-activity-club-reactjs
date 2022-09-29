import React from 'react';
import Profile from '../Profile/Profile';
import YogaDetails from '../YogaDetails/YogaDetails';

const Sidebar = (props) => {
	const { yogaTime } = props;
	return (
		<>
			<div id='sidebar-container' className='sticky top-0'>
				<div id='profile-container'>
					<Profile />
				</div>
				<div id='yoga-details-container'>
					<YogaDetails yogaTime={yogaTime} />
				</div>
			</div>
		</>
	);
};

export default Sidebar;
