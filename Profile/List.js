import React, { Component } from 'react';
import api from '../../../api';

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
				}, () => {
					api.request('get', `roofr.gotomy.dev/api/v1/companies/${this.state.id}`).then(response => {
						if(response){
							this.setState({
								data: response.data
							})
						}
					})
				});
			}
		});
	}
	render() {
		console.log(this.state);
		return <div />;
	}
}

export default ProfileEdit;
