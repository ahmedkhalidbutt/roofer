import React from 'react';

const TestimonialList = React.lazy(() => import('./List'));
const TestimonialAdd = React.lazy(() => import('./Add'));
const TestimonialDetail = React.lazy(() => import('./Detail'));

const routes = {
	testimonialList: { path: '/testimonials', exact: true, name: 'Testimonials', component: TestimonialList },
	testimonialAdd: { path: '/testimonials/add', exact: true, name: 'Add', component: TestimonialAdd },
    testimonialEdit: { path: '/testimonials/:id/edit', exact: true, name: 'Edit', component: TestimonialAdd },
    testimonialDetail: { path: '/testimonials/:id/details', exact: true, name: 'Edit', component: TestimonialDetail },
};

export default routes;
