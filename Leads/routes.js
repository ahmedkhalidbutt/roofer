import React from 'react';

const VisitedList = React.lazy(() => import('./Visited/List'));
const AppointmentAdd = React.lazy(() => import('./Appointment/Add'));
const RequestedList = React.lazy(() => import('./Requested/List'));
const AppointmentUpdate = React.lazy(() => import('./Appointment/Update'));

const routes = {
	visitedList: { path: '/leads/visited', exact: true, name: 'Visited', component: VisitedList },
	requestedList: { path: '/leads/requested', exact: true, name: 'Requested', component: RequestedList },
	appointmentAdd: { path: '/leads/:type/add-appointment', exact: true, name: 'Add', component: AppointmentAdd },
	appointmentUpdate: { path: '/leads/:type/update-appointment', exact: true, name: 'Update', component: AppointmentUpdate }
};

export default routes;
