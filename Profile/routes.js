import React from 'react';

const ProfileList = React.lazy(() => import('./List'));
const ProfileEdit = React.lazy(() => import('./Edit'));

const routes = {
	profileList: { path: '/profile', exact: true, name: 'Profile', component: ProfileList },
	profileEdit: { path: '/profile/:id/edit', exact: true, name: 'Edit', component: ProfileEdit },
};

export default routes;
