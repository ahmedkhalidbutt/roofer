import React, { Component} from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import RemoteTable from '../../components/common/RemoteTable';

class CustomAppointmentList extends Component {
	
	render() {
        const styles = {
            ul : {
                listStyleType: 'none',
                paddingLeft : '0px'
            }
        }
        const id = this.props.match.params.id;
        const columns = [
            { dataField: "id", text: 'Id', align: "center", sort: true, hidden: true },
            {
                dataField: "booking.category",
                text: 'Category',
                align: "center",
                sort: true,
            },
            {
                dataField: "booking.status",
                text: 'Status',
                align: "center",
                sort: true,
            },
            {
                dataField: "booking",
                text: 'Project Info',
                formatter: (status) => {
                    if(status){
                        return(
                            <ul style={styles.ul}>
                                <li><strong>From </strong>{status.from_date}</li>
                                <li><strong>To </strong>{status.to_date}</li>
                                <li><strong>Material Type </strong>{status.material_type}</li>
                                <li><strong>Location </strong>{status.location}</li>
                            </ul>
                        )
                    }
                    else {
                        return <div/>
                    }
                },
                align: "left",
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
                            entity={`get-roofr-appointments/${id}`}
                            hideEdit={true}
                            hideDetail={true}
                            columns={columns}
                            sort={defaultSorted}
                            dataArr={'appointment'}
                        />
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default CustomAppointmentList;