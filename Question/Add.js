import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import FormGenerator from '../../components/common/FormGenerator/FormGenerator';
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
				type: 'number',
				label: this.props.t('general:order'),
				required: true,
				name: 'order',
				col: 6
			},
			options: {
				type: 'dynamicFields',
				label: this.props.t('questions'),
				name: 'options',
				col: 12,
				schema: {
					// id0: {
					// 	type: 'text',
					// 	hidden: true,
					// 	label: this.props.t('id'),
					// 	name: 'id0',
					// 	col: 9
					// },
					title0: {
						type: 'text',
						label: this.props.t('title'),
						name: 'title0',
						col: 9
					},
					image0: {
						type: 'filePic',
						label: this.props.t('image'),
						name: 'image0',
						height: '148%',
						width: '89%',
						col: 3
					}
				}
			},
			status: {
				type: 'switch',
				label: this.props.t('general:status'),
				required: true,
				name: 'status',
				col: 6
			}
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
						repeater={true}
						name="questions"
						additionalDyanmicVal={[ 'id' ]}
						// initialValues={this.props.location.aboutProps}
						debug={true}
						redirect="questions"
					/>
				</CardBody>
			</Card>
		);
	}
}

export default withTranslation([ 'general' ])(QuestionAdd);
