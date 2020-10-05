import React from 'react';

const AppointmentList = React.lazy(() => import('./List'));
const AppointmentDetail = React.lazy(() => import('./Detail'));
const CustomAppointmentList = React.lazy(() => import('./customAppointment'));
const AppointmentUpdate = React.lazy(() => import('../Leads/Appointment/Update'));


const routes = {
	appointmentList: { path: '/appointments', exact: true, name: 'Appointments', component: AppointmentList },
	appointmentDetail: { path: '/appointments/:id/details', exact: true, name: 'Details', component: AppointmentDetail },
	customAppointmentList: { path: '/custom-appointments/:id', exact: true, name: 'Appointments', component: CustomAppointmentList },
	appointmentUpdate: { path: '/leads/:type/update-appointment', exact: true, name: 'Update', component: AppointmentUpdate }
};

export default routes;
