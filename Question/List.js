import React, { Component } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import RemoteTable from "../../components/common/RemoteTable";
import { withTranslation } from 'react-i18next';
import {renderLabelAsBadge} from '../../../helper';

class QuestionsList extends Component {

    render() {
        const columns = [
            { dataField: "id", text: this.props.t('general:id'), align: "center", sort: true, hidden: true },
            {
                dataField: "order",
                text: 'Order',
                align: "center",
                sort: true,
            },
            {
                dataField: "body",
                text: 'Body',
                align: "center",
                sort: true,
            },
            {
                dataField: "status",
                text: 'Status',
                formatter: (val) => renderLabelAsBadge(val, 'Inactive', 'Active'),
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
                        <strong>{this.props.t('general:questions')}</strong>
                    </CardHeader>
                    <CardBody>
                        <RemoteTable
                            entity="https://roofr.gotomy.dev/api/v1/questions"
                            customEntity = "questions"
                            columns={columns}
                            sort={defaultSorted}
                            addRoute="/questions/add"
                        />
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default withTranslation([ 'general' ])(QuestionsList);