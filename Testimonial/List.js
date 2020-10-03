import React, { Component } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import RemoteTable from "../../components/common/RemoteTable";
import { withTranslation } from 'react-i18next';

class TestimonialsList extends Component {

    render() {
        const columns = [
            { dataField: "id", text: this.props.t('general:id'), align: "center", sort: true , hidden: true},
            {
				dataField: 'image',
				text: this.props.t('general:image'),
				formatter: (image) => <img src={image} width={20} height={20} alt='' />,
				align: 'center',
			},
            {
                dataField: "name",
                text: this.props.t('general:name'),
                align: "center",
                sort: true,
            },
            {
                dataField: "text",
                text: this.props.t('general:text'),
                align: "center",
                sort: true,
            },  
        ];
        
        const defaultSorted = [
            {
                dataField: "id",
                order: "desc",
            },
        ];

        return (
            <div className="animated">
                <Card>
                    <CardHeader>
                        <strong>{this.props.t('general:testimonials')}</strong>
                    </CardHeader>
                    <CardBody>
                        <RemoteTable
                            entity="https://roofr.gotomy.dev/api/v1/testimonials"
                            customEntity = "testimonials"
                            columns={columns}
                            sort={defaultSorted}
                            addRoute="/testimonials/add"
                        />
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default withTranslation([ 'general' ])(TestimonialsList);