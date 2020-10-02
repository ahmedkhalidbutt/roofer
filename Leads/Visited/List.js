import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import RemoteTable from '../../../components/common/RemoteTable';
import { withTranslation } from 'react-i18next';

const styles = {
	ul: {
		listStyleType: 'none',
		paddingLeft: '0px'
	}
};
class VisitedList extends Component {
	getDetail = (data) => {
		this.props.history.replace({
			pathname: '/leads/visited/add-appointment',
			state: data
		});
	};

	handleEdit = (data) => {
		this.props.history.replace({
			pathname: '/leads/visited/update-appointment',
			state: data
		});
	};

	render() {
		const columns = [
			{ dataField: 'id', text: this.props.t('general:id'), align: 'center', sort: true, hidden: true },
			{
				dataField: 'customer',
				formatter: (customer) => {
					if (customer) {
						return (
							<div>
								{customer.person.first_name} {customer.person.last_name}
							</div>
						);
					} else return <div />;
				},
				text: 'Visitor Name',
				align: 'left',
				sort: true
			},
			{
				dataField: 'data',
				formatter: (data, row) => {
					if (row.customer) {
						return (
							<ul style={styles.ul}>
								<li>
									{row.customer.person.first_name} {row.customer.person.last_name}
								</li>
								<li>{row.customer.person.email}</li>
								<li>{row.customer.person.phone1}</li>
							</ul>
						);
					} else return <div />;
				},
				text: 'Contact Info',
				align: 'left',
				sort: true
			},
			{
				dataField: 'extra',
				formatter: (extra) => {
					let data = JSON.parse(extra);
					let keys = Object.keys(data);
					let values = Object.values(data);
					let projectOptions = keys.map((key, i) => {
						return (
							<li>
								<strong>{key.replace(/\'/gi,'')}</strong> {values[i]}
							</li>
						);
					});
					return <ul style={styles.ul}>{projectOptions}</ul>;
				},
				text: 'Project Info',
				align: 'left',
				sort: true
			},
			{
				dataField: 'status',
				text: this.props.t('general:status'),
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
							csvDownload={true}
							getDetail={this.getDetail}
							getRowId={this.handleEdit}
							selectedRows={true}
							{...this.props.remoteTableFields}
						/>
					</CardBody>
				</Card>
			</div>
		);
	}
}
export default withTranslation([ 'general' ])(VisitedList);
