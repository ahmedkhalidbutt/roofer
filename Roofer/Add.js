import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import CompanyAdd from '../../modules/Entity/Company/Add';

class CustomCompanyAdd extends Component {
	render() {
		const extendedFields = {
			password: {
				type: 'password',
				label: this.props.t('general:password'),
				required: true,
				name: 'password',
				col: 4,
				position: 2
			},
			license_no: {
				type: 'text',
				label: this.props.t('general:license-no'),
				required: true,
				name: 'license_no',
				col: 4
			},
			email: {
				type: 'text',
				label: this.props.t('general:email'),
				required: true,
				name: 'email',
				col: 4
			},
			appointment_time: {
				type: 'text',
				label: this.props.t('general:appointment-time'),
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
				label: this.props.t(`general:${material}-cost`),
				name: `material[${i}]`,
				col: 4
			}
		})
		extendedFields.break = {
			type: 'nextline'
		}
		extendedFields.logo = {
			type: 'filePic',
			label: this.props.t('general:logo'),
			name: 'logo',
			col: 4
		}
		// extendedFields.html = {
		// 	type: 'html',
		// 	col: 12,
		// 	render: '<h3>Target area</h3>'
		// }
		const customProps = {
			targetEntity: 'https://roofr.gotomy.dev/api/v1/companies',
			redirect: 'roofer',
			hideDetail: true,
			debug: true
		};
		
		return <CompanyAdd setPosition={true} extendedFields={extendedFields} customProps={customProps} {...this.props} />;
	}
}

export default withTranslation([ 'general' ])(CustomCompanyAdd);
