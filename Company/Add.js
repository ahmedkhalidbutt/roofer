import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import CompanyAdd from '../../modules/Entity/Company/Add';

class CustomCompanyAdd extends Component {
    render() {
		const customProps = {
			targetEntity: 'https://roofr.gotomy.dev/api/v1/companies',
			redirect: 'companies'
		};
		return (
			<CompanyAdd customProps={customProps} {...this.props} />
		);
	}
}

export default withTranslation([ 'general' ])(CustomCompanyAdd);
