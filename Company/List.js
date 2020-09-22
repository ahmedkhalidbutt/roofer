import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import CompanyList from '../../modules/Entity/Company/List'

class CustomCompanyList extends Component {
	render() {
		let extendedFields = [
			{
				dataField: 'license_no',
				text: this.props.t('general:license_no'),
				align: 'center',
				sort: true
			},
			{
				dataField: 'target_area',
				text: this.props.t('general:target_area'),
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
			},
		]
		const remoteTableFields = {
			entity: 'https://roofr.gotomy.dev/api/v1/companies',
			addRoute: '/companies/add',
			customEntity: 'companies'
		};

		return (
			<CompanyList extendedFields={extendedFields} remoteTableFields={remoteTableFields} />
		);
	}
}

export default withTranslation([ 'general', 'entity' ])(CustomCompanyList);
