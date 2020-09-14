import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import TermList from '../../modules/Base/Terms/List'

class CustomTermList extends Component {    

	render() {
		const columns = [
			{
				dataField: 'test',
				text: this.props.t('base:test'),
				align: 'center',
				sort: true
			}
        ];
        
        const remoteTableFields = {
			entity: 'terms',
			addRoute: '/terms/add',
		};

		return (
			<TermList extendedFields={columns} remoteTableFields={remoteTableFields} />
		);
	}
}
export default withTranslation([ 'general', 'base' ])(CustomTermList);
