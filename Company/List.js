import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import RemoteTable from '../../components/common/RemoteTable';
import { withTranslation } from 'react-i18next';

class CompanyList extends Component {
	render() {
		const columns = [
			{ dataField: 'id', text: this.props.t('general:id'), align: 'center', sort: true },
			{
				dataField: 'name',
				text: this.props.t('general:name'),
				align: 'center',
				sort: true
			},
			{
				dataField: 'phone1',
				text: this.props.t('general:phone'),
				align: 'center',
				sort: true
			},
			{
				dataField: 'phone2',
				text: this.props.t('general:phone2'),
				align: 'center',
				sort: true
			},
			{
				dataField: 'address.addr1',
				text: this.props.t('general:address'),
				align: 'center',
				sort: true
			},
			{
				dataField: 'address.city',
				text: this.props.t('general:city'),
				align: 'center',
				sort: true
			},
			{
				dataField: 'address.state',
				text: this.props.t('general:state'),
				align: 'center',
				sort: true
			},
			{
				dataField: 'address.country',
				text: this.props.t('general:country'),
				align: 'center',
				sort: true
			}
		];
		const defaultSorted = [
			{
				dataField: 'id',
				order: 'desc'
			}
		];
		return (
			<div className="animated">
				<Card>
					<CardHeader>
						<strong>{this.props.t('general:all')} {this.props.t('entity:company')}</strong>
					</CardHeader>
					<CardBody>
						<RemoteTable
							entity="companies"
							customEntity="entity/companies"
							columns={columns}
							sort={defaultSorted}
							showDetail={true}
							addRoute="/entity/companies/add"
						/>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default withTranslation([ 'general', 'entity' ])(CompanyList);
