import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import CompanyList from '../../modules/Entity/Company/List';

class CustomCompanyList extends Component {
	render() {
		let extendedFields = [
			{
				dataField: 'license_no',
				text: this.props.t('entity:license-no'),
				align: 'center',
				sort: true
			},
			{
				dataField: 'logo',
				text: this.props.t('general:logo'),
				formatter: (fileName) => (
					<img
						className="rounded-circle"
						style={{ objectFit: 'cover' }}
						src={fileName ? fileName : require('../../../assets/images/image-placeholder.jpg')}
						width={50}
						height={50}
						alt=""
					/>
				),
				align: 'center',
				position: 1
			},
			{
				dataField: 'extra.location',
				text: this.props.t('general:location'),
				align: 'center',
				sort: true
			},
			{
				dataField: 'phone2',
				removeField: true
			},
			{
				dataField: 'address.state',
				removeField: true
			},
			{
				dataField: 'address.country',
				removeField: true
			}
		];
		const newButton = {
			size: 'md',
			color: 'success',
			name: this.props.t('entity:list-appointment'),
			callback: (row) => {
				this.props.history.push({
					pathname: `/custom-appointments/${row.id}`,
					state: row
				});
			}
		};
		const remoteTableFields = {
			entity: 'https://roofr.gotomy.dev/api/v1/companies',
			addRoute: '/roofer/add',
			customEntity: 'roofer',
			customButton: newButton
		};

		return <CompanyList  setPosition={true} extendedFields={extendedFields} remoteTableFields={remoteTableFields} />;
	}
}

export default withTranslation([ 'general', 'entity' ])(CustomCompanyList);
