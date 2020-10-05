import React, { Component } from 'react';
import api from '../../../api';
import CustomCompanyAdd from '../Roofer/Add';

class ProfileEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			data: ''
		};
	}
	componentDidMount() {
		api.request('get', 'https://roofr.gotomy.dev/api/v1/get-company-details').then((response) => {
			if (response) {
				let { data } = response;
				this.setState({
					id: data.id
				});
			}
		});
	}
	render() {
		const customProps = {
			targetEntity: 'update-company',
			id : this.state.id,
			redirect: 'dashboard',
			hideDetail: true,
			debug: false,
			customEditApi: 'companies'
		};
		if (this.state.id) {
			return (
				<CustomCompanyAdd id={this.state.id} customProps={customProps} />
			);
		}
		return <div />;
	}
}

export default ProfileEdit;
