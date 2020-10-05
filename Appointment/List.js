import React, { Component, Fragment } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import RemoteTable from '../../components/common/RemoteTable';
import { withTranslation } from 'react-i18next';
import { AppContext } from '../../components/context';

class AppointmentList extends Component {
	static contextType = AppContext;

	componentDidMount() {
		if (this.context.modules.length === 2) {
			this.props.history.replace(`/custom-appointments/${this.context.userId}`);
		}
	}

	render() {
		const columns = [
			{ dataField: 'id', text: 'Id', align: 'center', sort: true, hidden: true },
			{
				dataField: 'booking.customer.person',
				text: this.props.t('Customer Info'),
				formatter: (person) => {
					if (person) {
						return (
							<React.Fragment>
								<p>Username: {person.title}</p>
								<p>Email: {person.email}</p>
								<p>Phone: {person.phone1}</p>
							</React.Fragment>
						);
					} else {
						return <div />;
					}
				},
				align: 'center',
				sort: true
			},
			{
				dataField: 'booking.customer.person.phone1',
				text: this.props.t('general:phone'),
				align: 'center',
				sort: true
			},
			{
				dataField: 'company.name',
				text: this.props.t('general:roofer'),
				align: 'center',
				sort: true
			},
			{
				dataField: 'date_time',
				text: this.props.t('general:date-time'),
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
						<strong>{this.props.t('general:appointment')}</strong>
					</CardHeader>
					<CardBody>
						<RemoteTable
							entity={
								this.context.modules.length === 2 ? (
									`get-roofr-appointments/${this.context.userId}`
								) : (
									'appointments'
								)
							}
							customEntity="appointments"
							columns={columns}
							sort={defaultSorted}
							hideEdit={true}
							urlName="appointment"
							saveData={false}
						/>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default withTranslation([ 'general', 'appointment' ])(AppointmentList);
