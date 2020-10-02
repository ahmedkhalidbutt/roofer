import React from 'react';

const AppointmentList = React.lazy(() => import('./List'));
const AppointmentDetail = React.lazy(() => import('./Detail'));


const routes = {
	appointmentList: { path: '/appointments', exact: true, name: 'Appointments', component: AppointmentList },
	appointmentDetail: { path: '/appointments/:id/details', exact: true, name: 'Details', component: AppointmentDetail },
};

export default routes;
