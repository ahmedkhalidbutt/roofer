import React, { Component } from 'react';
import DetailView from '../../components/common/DetailView';

export default class CompanyDetail extends Component {
	render() {
		return (
			<div>
				<DetailView
					id={this.props.match.params.id}
					entity="companies"
					image={[ 'logo' ]}
					data={typeof this.props.location === 'undefined' ? false : this.props.location.aboutProps}
					filterArr={[ 'created_at', 'updated_at' ]}
				/>
			</div>
		);
	}
}
