import React, { Component } from 'react';
import CompanyAdd from '../../modules/Entity/Company/Add';

class CustomCompanyAdd extends Component {
	render() {
		const extendedFields = {
			license_no: {
				type: 'text',
				label: 'License No',
				required: true,
				name: 'license_no',
				col: 4
			},
			email: {
				type: 'text',
				label: 'Email',
				required: true,
				name: 'email',
				col: 4
			},
			target_area: {
				type: 'text',
				label: 'Target Area',
				required: true,
				name: 'target_area',
				col: 4
			},
			appointment_time: {
				type: 'text',
				label: 'Appointment Time',
				required: true,
				name: 'appointment_time',
				col: 4
			},
			state: false,
			lat: false,
			lng: false
		};
		let materialArr = [ 'Asphalt', 'Metal', 'Tiles' ];
		materialArr.forEach((material, i) => {
			extendedFields[material] = {
				type: 'text',
				label: `${material}`,
				name: `material[${i}]`,
				col: 4
			};
		});
		extendedFields.logo = {
			type: 'filePic',
			label: 'Logo',
			name: 'logo',
			col: 4
		};
		const customProps = {
			targetEntity: 'companies',
			redirect: 'roofer',
			hideDetail: true
		};

		return <CompanyAdd extendedFields={extendedFields} customProps={customProps} {...this.props} />;
	}
}

export default CustomCompanyAdd;
