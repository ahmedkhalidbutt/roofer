import React from 'react';

const CompanyList = React.lazy(() => import('./List'));

const routes = {
	companyList: { path: '/companies', exact: true, name: 'Companies', component: CompanyList }
};

export default routes;
