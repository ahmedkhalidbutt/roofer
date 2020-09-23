import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import RemoteTable from '../../../components/common/RemoteTable';
import { withTranslation } from 'react-i18next';

class VisitedList extends Component {
	getDetail = (data) => {
        console.log(data);
		this.props.history.replace({
            pathname: '/leeds/visited/add-appointment',
            state: data
        })
	};

	render() {
		const columns = [
			{ dataField: 'id', text: this.props.t('general:id'), align: 'center', sort: true },
			{
				dataField: 'category',
				text: this.props.t('general:category'),
				align: 'center',
				sort: true
			},
			{
				dataField: 'status',
				text: this.props.t('general:status'),
				align: 'center',
				sort: true
			},
			{
				dataField: 'from_date',
				text: this.props.t('general:from'),
				align: 'center',
				sort: true
			},
			{
				dataField: 'to_date',
				text: this.props.t('general:to'),
				align: 'center',
				sort: true
			}
		];

		if (this.props.extendedFields) {
			this.props.extendedFields.forEach((field) => columns.push(field));
		}

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
						<strong>{this.props.t('general:visited')}</strong>
					</CardHeader>
					<CardBody>
						<RemoteTable
							entity="https://roofr.gotomy.dev/api/v1/get-visited-leads"
							customEntity="leeds/visited"
							columns={columns}
							sort={defaultSorted}
							detailButtonText={'Add Appointment'}
							editButtonText={'Update Status'}
							disableDelete={true}
							getDetail={this.getDetail}
							getRowId={this.handleEdit}
							{...this.props.remoteTableFields}
						/>
					</CardBody>
				</Card>
			</div>
		);
	}
}
export default withTranslation([ 'general' ])(VisitedList);
