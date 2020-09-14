import React from 'react';

const QuestionList = React.lazy(() => import('./List'));
const QuestionAdd = React.lazy(() => import('./Add'));
const QuestionDetail = React.lazy(() => import('./Detail'));

const routes = {
	questionList: { path: '/questions', exact: true, name: 'Questions', component: QuestionList },
	questionAdd: { path: '/questions/add', exact: true, name: 'Add', component: QuestionAdd },
    questionEdit: { path: '/questions/:id/edit', exact: true, name: 'Edit', component: QuestionAdd },
    questionDetail: { path: '/questions/:id/details', exact: true, name: 'Edit', component: QuestionDetail },
};

export default routes;
