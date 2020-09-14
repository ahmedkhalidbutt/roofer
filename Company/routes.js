import React from 'react';

const CompanyList = React.lazy(() => import('./List'));
const CompanyAdd = React.lazy(() => import('./Add'));

const routes = {
	companyList: { path: '/companies', exact: true, name: 'Companies', component: CompanyList },
	companyAdd: { path: '/companies/add', exact: true, name: 'Add', component: CompanyAdd },
	companyEdit: { path: '/companies/:id/edit', exact: true, name: 'Edit', component: CompanyAdd }
};

export default routes;
