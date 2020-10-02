import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { Button, Card, Input, Row, Col } from 'reactstrap';
import { toast } from 'react-toastify';
import 'react-datepicker/dist/react-datepicker.css';
import { convertModelToFormData } from '../../../../helper';
import api from '../../../../api';

export default class AppointmentAdd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			booking_id: this.props.location.state ? this.props.location.state.id : false,
			companyList: [],
			company_id: false,
			selectedDate: new Date()
		};
	}
	componentDidMount() {
		api.request('get', 'https://roofr.gotomy.dev/api/v1/companies').then((response) => {
			this.setState({
				companyList: response.data
			});
		});
	}
	setStartDate = (date) => {
		this.setState({
			selectedDate: date
		});
	};

	formatAMPM = (date) => {
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0' + minutes : minutes;
		var strTime = hours + ':' + minutes + ' ' + ampm;
		return strTime;
	};

	handleCompanySelect = (e) => {
		this.setState({
			company_id: parseInt(e.target.value)
		});
	};

	setAppointment = () => {
		let { company_id, selectedDate, booking_id } = this.state;
		let time = this.formatAMPM(selectedDate);
		let date = selectedDate.getDate();
		let month = selectedDate.getMonth() + 1;
		let year = selectedDate.getFullYear();
		let date_time = `${year}-${month}-${date} ${time}`;
		let appointmentPayload = convertModelToFormData({ booking_id, company_id, date_time });
		if (company_id) {
			api.request('post', 'https://roofr.gotomy.dev/api/v1/appointments', appointmentPayload).then((response) => {
				if (response) {
					let location = this.props.history.location.pathname;
					let the_arr = location.split('/');
					the_arr.pop();
					let previousUrl = the_arr.join('/');
					this.props.history.replace(previousUrl);
					toast.success('Appointment Set Successfully', { autoClose: 3000 });
				}
			});
		} else toast.error('Select company', { autoClose: 3000 });
	};

	render() {
		let { selectedDate, companyList } = this.state;
		console.log(this.props);
		toast.configure();
		let companySelect = (
			<Input type="select">
				<option>Select Company</option>
			</Input>
		);
		if (companyList.length) {
			let companyOptions = companyList.map((company, i) => {
				return (
					<option key={i} value={company.id}>
						{company.name}
					</option>
				);
			});
			companySelect = (
				<Input
					type="select"
					onChange={(e) => {
						this.handleCompanySelect(e);
					}}
				>
					<option>Select Company</option>
					{companyOptions}
				</Input>
			);
		}
		return (
			<Card style={{ height: '370px' }}>
				<div
					style={{
						textAlign: 'center',
						width: '100%',
						marginTop: '30px'
					}}
				>
					<h5>Select Appointment Time</h5>
					<Row style={{ marginBottom: '20px' }}>
						<Col md="2" />
						<Col md="4">{companySelect}</Col>
						<Col md="4">
							<DatePicker
								selected={selectedDate}
								onChange={(date) => this.setStartDate(date)}
								showTimeSelect
								dateFormat="yyyy-dd-MM hh:mm:ss a"
							/>
						</Col>
					</Row>
					<Button onClick={this.setAppointment} color="primary">
						Set Appointment
					</Button>
				</div>
			</Card>
		);
	}
}
