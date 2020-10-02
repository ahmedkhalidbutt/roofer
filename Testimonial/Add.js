import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import FormGenerator from '../../components/common/FormGenerator/FormGenerator';
import CardHeader from 'reactstrap/es/CardHeader';
import { withTranslation } from 'react-i18next';


class TestimonialsAdd extends Component {
	render() {
		const { id } = this.props.match.params;

		const fields = {
			name: {
				type: 'text',
				label: this.props.t('general:name'),
				required: true,
				name: 'name',
				col: 6
			},
			text: {
				type: 'text',
				label: this.props.t('general:text'),
				required: true,
				name: 'text',
				col: 6
			},
			image: {
				type: 'filePic',
				label: this.props.t('general:image'),
				required: true,
				name: 'image',
				col: 6
			},

		};
		return (
			<Card className="animated fadeIn">
				<CardHeader>
					{this.props.t('general:add-new')} {this.props.t('general:testimonial')}
				</CardHeader>
				<CardBody>
					<FormGenerator
						targetEntity="https://roofr.gotomy.dev/api/v1/testimonials"
						fields={fields}
						targetId={id}
						name="testimonials"
						debug={true}
						redirect="testimonials"
					/>
				</CardBody>
			</Card>
		);
	}
}

export default withTranslation([ 'general'])(TestimonialsAdd);
