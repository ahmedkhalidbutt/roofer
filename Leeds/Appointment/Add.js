import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default class AppointmentAdd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			...this.props.location.state,
			selectedDate: new Date()
		};
	}
	setStartDate = (date) => {
		console.log(date);
		this.setState({
			selectedDate: date
		});
	};
	render() {
		let { selectedDate } = this.state;
		return (
			<div>
				<div style={{ width: '15%' }}>
					<DatePicker selected={selectedDate} onChange={(date) => this.setStartDate(date)} showTimeSelect />
				</div>
			</div>
		);
	}
}
