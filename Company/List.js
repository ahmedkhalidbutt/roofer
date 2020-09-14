import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import CompanyList from '../../modules/Entity/Company/List'

class CustomCompanyList extends Component {
	render() {
		let extendedFields = [
			{
				dataField: 'address.zip_code',
				text: this.props.t('general:zipcode'),
				align: 'center',
				sort: true
			},
			// {
			// 	dataField: 'address.lat',
			// 	text: this.props.t('general:lat'),
			// 	align: 'center',
			// 	sort: true
			// },
			// {
			// 	dataField: 'address.lng',
			// 	text: this.props.t('general:lng'),
			// 	align: 'center',
			// 	sort: true
			// }
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
