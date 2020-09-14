import React from 'react';

const TermList = React.lazy(() => import('./List'));
const TermAdd = React.lazy(() => import('./Add'));

const routes = {
	customTermList: { path: '/terms', exact: true, name: 'Terms', component: TermList },
	customTermAdd: { path: '/terms/add', exact: true, name: 'Add', component: TermAdd }
};

export default routes;
