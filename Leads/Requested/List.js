import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import RemoteTable from '../../../components/common/RemoteTable';
import { withTranslation } from 'react-i18next';

const styles = {
	ul : {
		listStyleType: 'none',
		paddingLeft : '0px'
	}
}
class RequestedList extends Component {
	getDetail = (data) => {
		this.props.history.push({
            pathname: '/leads/requested/add-appointment',
            state: data
        })
	};

	handleEdit = (data) => {
		this.props.history.push({
            pathname: '/leads/requested/update-appointment',
            state: data
        })
	}

	render() {
		const columns = [
			{ dataField: 'id', text: 'ID', align: 'left', sort: true, hidden: true},
			{
				dataField: 'customer.person.first_name',
				text: this.props.t('general:customer-name'),
				align: 'left',
				sort: true
			},
			{
				dataField: 'customer.person',
				text: this.props.t('general:contact-info'),
				formatter: (person) => {
					console.log(person);
					if(person){
						return (
							<ul style={styles.ul}>
								<li>{person.email}</li>
								<li>{person.phone1}</li>
							</ul>
						)
					}
					else return <div/>
				},
				align: 'left',
				sort: true
			},
			{
				dataField: 'status',
				text: this.props.t('general:status'),
				align:'left',
				sort: 'true'
			},
			{
				dataField: 'location',
				text: this.props.t('general:location'),
				align:'left',
				sort: 'true'
			},
			{
				dataField: 'from_date',
				text: this.props.t('general:task-start'),
				align:'left',
				sort: 'true'
			},
			{
				dataField: 'to_date',
				text: this.props.t('general:task-end'),
				align:'left',
				sort: 'true'
			},
			{
				dataField: 'company.name',
				text: this.props.t('general:roofer'),
				align:'left',
				sort: 'true'
			},
			{
				dataField: 'task',
				text: this.props.t('general:task'),
				align:'left',
				sort: 'true'
			},
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
						<strong>{this.props.t('general:requested')}</strong>
					</CardHeader>
					<CardBody>
						<RemoteTable
							entity="https://roofr.gotomy.dev/api/v1/get-requested-leads"
							customEntity="leeds/requested"
							columns={columns}
							sort={defaultSorted}
							detailButtonText={'Add Appointment'}
							editButtonText={'Update Status'}
							disableDelete={true}
							csvDownload={true}
							getDetail={this.getDetail}
							getRowId={this.handleEdit}
							hideDetail={true}
                            selectedRows= {true}
							{...this.props.remoteTableFields}
						/>
					</CardBody>
				</Card>
			</div>
		);
	}
}
export default withTranslation([ 'general', 'leads' ])(RequestedList);
