import React, { Component } from 'react';
import DetailView from '../../components/common/DetailView';

export default class CompanyDetail extends Component {
	render() {
		return (
			<div>
				<DetailView
					id={this.props.match.params.id}
					entity="companies"
					data={typeof this.props.location === 'undefined' ? false : this.props.location.aboutProps}
				/>
			</div>
		);
	}
}
