import React, { Component } from 'react';
import { Input, Card, Button } from 'reactstrap';
import api from '../../../../api';
import { toast } from 'react-toastify';
export default class AppointmentUpdate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.location.state ? this.props.location.state.id : false,
			status: this.props.location.state ? this.props.location.state.booking.status : 'Select Status',
			statusOptions: [ 'accepted', 'rejected', 'pending', 'bad lead' ],
			selectedStatus: this.props.location.state ? this.props.location.state.status : false
		};
	}
	componentDidMount() {
		let filteredStatus = this.state.statusOptions.filter((option) => {
			return option !== this.state.status;
		});
		this.setState({
			statusOptions: filteredStatus
		});
	}
	handleStatusChange = (e) => {
		this.setState({
			selectedStatus: e.target.value
		});
	};
	updateStatus = () => {
		let { id, selectedStatus } = this.state;
		let status = {
			status: selectedStatus
		}
		if(selectedStatus === 'accepted'){
			status.category = 'requested'
		}
		api
			.request('patch', `https://roofr.gotomy.dev/api/v1/bookings/${id}`, status)
			.then((response) => {
				let location = this.props.history.location.pathname;
				let the_arr = location.split('/');
				the_arr.pop();
				let previousUrl = the_arr.join('/');
				this.props.history.replace(previousUrl);
				toast.success('Appointment Set Successfully', { autoClose: 3000 });
			});
	};
	render() {
		let statusOptions = this.state.statusOptions.map((option) => {
			return <option key={option} value={option}>{option}</option>;
		});
		toast.configure();
		return (
			<Card style={{ textAlign: 'center', height: '370px' }}>
				<div style={{ marginTop: '30px', marginBottom: '20px' }} className='d-flex flex-column justify-content-center align-items-center'>
					<h5>Select Status</h5>
					<Input
						onChange={(e) => this.handleStatusChange(e)}
						defaultValue={this.state.status}
						type="select"
						style={{ width: '300px', margin: '20px 0px' }}
					>
						<option value={this.state.status}>{this.state.status}</option>
						{statusOptions}
					</Input>
					<Button color="primary" onClick={this.updateStatus}>
						Update Status
					</Button>
				</div>
			</Card>
		);
	}
}
