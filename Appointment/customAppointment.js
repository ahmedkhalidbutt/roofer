import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import RemoteTable from '../../components/common/RemoteTable';
import { withTranslation } from 'react-i18next';

class CustomAppointmentList extends Component {
	handleEdit = (data) => {
		this.props.history.push({
			pathname: '/leads/requested/update-appointment',
			state: data
		});
	};

	render() {
		const styles = {
			ul: {
				listStyleType: 'none',
				paddingLeft: '0px'
			}
		};
		const id = this.props.match.params.id;
		const columns = [
			{ dataField: 'id', text: this.props.t('general:id'), align: 'center', sort: true, hidden: true },
			{
				dataField: 'booking.customer.id',
				text: this.props.t('Customer Info'),
				align: 'center',
				formatter: (cell, row) => (
					<React.Fragment>
						<p>Username: {row.booking.customer.person.title}</p>
						<p>Email: {row.booking.customer.person.email}</p>
						<p>Phone: {row.booking.customer.person.phone1}</p>
					</React.Fragment>
				),
				sort: true
			},
			{
				dataField: 'booking.category',
				text: this.props.t('general:category'),
				align: 'center',
				sort: true
			},
			{
				dataField: 'booking.status',
				text: this.props.t('general:status'),
				align: 'center',
				sort: true
			},
			{
				dataField: 'booking',
				text: 'Project Info',
				formatter: (status, row) => {
					if (status) {
						return (
							<ul style={styles.ul}>
								<li>
									<strong>From </strong>
									{status.from_date}
								</li>
								<li>
									<strong>To </strong>
									{status.to_date}
								</li>
								<li>
									<strong>Date Time </strong>
									{row.date_time}
								</li>
								<li>
									<strong>Material Type </strong>
									{status.material_type}
								</li>
								<li>
									<strong>Location </strong>
									{status.location}
								</li>
							</ul>
						);
					} else {
						return <div />;
					}
				},
				align: 'left',
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
						<strong>Appointments</strong>
					</CardHeader>
					<CardBody>
						<RemoteTable
							entity={`get-roofer-appointments/${id}`}
							hideDetail={true}
							columns={columns}
							sort={defaultSorted}
							editButtonText={'Update Status'}
							getRowId={this.handleEdit}
							saveData={false}
						/>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default withTranslation([ 'general' ])(CustomAppointmentList);
