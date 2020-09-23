import React from 'react';

const VisitedList = React.lazy(() => import('./Visited/List'));
const AppointmentAdd = React.lazy(() => import('./Appointment/Add'));
const RequestedList = React.lazy(() => import('./Requested/List'));

const routes = {
	visitedList: { path: '/leeds/visited', exact: true, name: 'Visited', component: VisitedList },
	requestedList: { path: '/leeds/requested', exact: true, name: 'Requested', component: RequestedList },
	appointmentAdd: { path: '/leeds/:type/add-appointment', exact: true, name: 'Add', component: AppointmentAdd }
};

export default routes;
