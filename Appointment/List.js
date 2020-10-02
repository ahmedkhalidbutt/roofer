import React, { Component, Fragment } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import RemoteTable from '../../components/common/RemoteTable';
import { withTranslation } from 'react-i18next';

class AppointmentList extends Component {
	
	render() {
        const columns = [
            { dataField: "id", text: 'Id', align: "center", sort: true, hidden: true },
            {
                dataField: "booking.customer.person",
                text: 'Customer Name',
                formatter: (person) => {
                    if(person){
                        return <Fragment>{person.first_name} {person.last_name}</Fragment>
                    }
                    else {
                        return <div/>
                    }
                },
                align: "center",
                sort: true,
            },
            {
                dataField: "booking.customer.person.phone1",
                text: 'Contact Number',
                align: "center",
                sort: true,
            },
            {
                dataField: "company.name",
                text: 'Roofer',
                align: "center",
                sort: true,
            },
            {
                dataField: "date_time",
                text: 'Date & Time',
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
                        <strong>Appointments</strong>
                    </CardHeader>
                    <CardBody>
                        <RemoteTable
                            entity="https://roofr.gotomy.dev/api/v1/appointments"
                            customEntity="appointments"
                            columns={columns}
                            sort={defaultSorted}
                            hideEdit ={true}
                            urlName = 'appointment'
                        />
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default AppointmentList;
