import React, { Component } from 'react';
import DetailView from '../../components/common/DetailView';

export default class AppointmentDetail extends Component {
	render() {
		return (
			<div>
				<DetailView
					id={this.props.match.params.id}
					entity="appointments"
					data={typeof this.props.location === 'undefined' ? false : this.props.location.aboutProps}
				/>
			</div>
		);
	}
}
