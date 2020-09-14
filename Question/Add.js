import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import FormGenerator from '../../components/common/FormGenerator';
import CardHeader from 'reactstrap/es/CardHeader';
import { withTranslation } from 'react-i18next';


class QuestionAdd extends Component {
	render() {
		const { id } = this.props.match.params;

		const fields = {
			body: {
				type: 'text',
				label: this.props.t('general:body'),
				required: true,
				name: 'body',
				col: 6
			},
			order: {
				type: 'text',
				label: this.props.t('general:order'),
				required: true,
				name: 'order',
				col: 6
			},
			status: {
				type: 'switch',
				label: this.props.t('general:status'),
				required: true,
				name: 'status',
				col: 6
			},

		};
		return (
			<Card className="animated fadeIn">
				<CardHeader>
					{this.props.t('general:add-new')} {this.props.t('general:question')}
				</CardHeader>
				<CardBody>
					<FormGenerator
						targetEntity="https://roofr.gotomy.dev/api/v1/questions"
						fields={fields}
						targetId={id}
						name="questions"
						debug={true}
						redirect="questions"
					/>
				</CardBody>
			</Card>
		);
	}
}

export default withTranslation([ 'general'])(QuestionAdd);
