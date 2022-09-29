import React from 'react';
import Profile from '../Profile/Profile';
import YogaDetails from '../YogaDetails/YogaDetails';

const Sidebar = () => {
	return (
		<>
			<div id='sidebar-container'>
				<div id='profile-container'>
					<Profile />
				</div>
				<div id='yoga-details-container'>
					<YogaDetails />
				</div>
			</div>
		</>
	);
};

export default Sidebar;
