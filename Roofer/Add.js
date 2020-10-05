import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import CompanyAdd from '../../modules/Entity/Company/Add';

class CustomCompanyAdd extends Component {
	render() {
		const extendedFields = {
			license_no: {
				type: 'text',
				label: this.props.t('entity:license-no'),
				required: true,
				name: 'license_no',
				col: 4
			},
			email: {
				type: 'text',
				label: this.props.t('general:email'),
				required: true,
				validation: 'email',
				name: 'email',
				col: 4
			},
			password: {
				type: 'password',
				label: this.props.t('user:password'),
				required: true,
				name: 'password',
				col: 4,
				position: 2
			},
			appointment_time: {
				type: 'text',
				label: this.props.t('entity:appointment-time'),
				required: true,
				name: 'appointment_time',
				col: 4
			},
			state: false,
			lat: false,
			lng: false
		};
		let materialArr = [ 'asphalt', 'metal', 'tiles' ];
		materialArr.forEach((material, i) => {
			extendedFields[material] = {
				type: 'number',
				label: this.props.t(`entity:${material}-cost`),
				name: `material[${i}]`,
				col: 4
			};
		});
		extendedFields.break = {
			type: 'nextline'
		};
		extendedFields.logo = {
			type: 'filePic',
			label: this.props.t('general:logo'),
			name: 'logo',
			col: 4
		};
		extendedFields.html = {
			type: 'h4',
			name: 'Target area',
			col: 12
		};
		const customProps = {
			targetEntity: 'https://roofr.gotomy.dev/api/v1/companies',
			redirect: 'roofer',
			hideDetail: true,
			debug: false
		};

		return (
			<CompanyAdd setPosition={true} extendedFields={extendedFields} customProps={customProps} {...this.props} />
		);
	}
}

export default withTranslation([ 'general', 'entity', 'user' ])(CustomCompanyAdd);
