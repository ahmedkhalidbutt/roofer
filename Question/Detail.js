import React, { Component } from 'react';
import DetailView from '../../components/common/DetailView';

export default class QuestionsDetail extends Component {
	render() {
		return (
			<div>
				<DetailView
					id={this.props.match.params.id}
					entity="questions"
					data={typeof this.props.location === 'undefined' ? false : this.props.location.aboutProps}
					filterArr={[ 'id' ]}
					ArrImage={[ 'image' ]}
				/>
			</div>
		);
	}
}
