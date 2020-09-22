import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import CompanyAdd from '../../modules/Entity/Company/Add';

class CustomCompanyAdd extends Component {
	render() {
		const extendedFields = {
			license_no: {
				type: 'text',
				label: this.props.t('general:license_no'),
				required: true,
				name: 'license_no',
				col: 6
			},
			email: {
				type: 'text',
				label: this.props.t('general:email'),
				required: true,
				name: 'email',
				col: 6
			},
			target_area: {
				type: 'text',
				label: this.props.t('general:target_area'),
				required: true,
				name: 'target_area',
				col: 6
			},
			appointment_time: {
				type: 'text',
				label: this.props.t('general:appointment_time'),
				required: true,
				name: 'appointment_time',
				col: 6
			},
			state: false,
			lat: false,
			lng: false
		};
		let materialArr = [ 'Asphalt', 'Metal', 'Tiles' ];
		materialArr.forEach((material, i) => {
			extendedFields[material] = {
				type: 'text',
				label: this.props.t(`general:${material}`),
				name: `material[${i}]`,
				col: 4
			}
		})
		const customProps = {
			targetEntity: 'https://roofr.gotomy.dev/api/v1/companies',
			redirect: 'companies',
			hideDetail: true
		};
		
		return <CompanyAdd extendedFields={extendedFields} customProps={customProps} {...this.props} />;
	}
}

export default withTranslation([ 'general' ])(CustomCompanyAdd);
