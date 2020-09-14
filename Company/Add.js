import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import TermAdd from '../';
import CardHeader from 'reactstrap/es/CardHeader';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router';

class CustomTermAdd extends Component {

    render() {

		const fields = {
			test: {
				type: 'text',
				label: this.props.t('general:test'),
				required: true,
				name: 'test',
				col: 6
			}
		};

		return (
			<TermAdd extendedFields={fields} {...this.props} />
		);
	}
}

export default withTranslation([ 'general' ])(CustomTermAdd);
