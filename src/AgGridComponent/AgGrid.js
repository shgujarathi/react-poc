import React, {Component} from 'react';
import {AgGridReact} from 'ag-grid-react';


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class AgGrid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {headerName: "SELECT", checkboxSelection: true},
                {headerName: "Template Name", field: "templateName", sortable: true, filter: true},
                {headerName: "Test Protocol", field: "testProtocol", sortable: true, filter: true},
                {headerName: "Testing Status", field: "testingStatus", sortable: true, filter: true},
                {headerName: "Product Stage", field: "productStage", sortable: true, filter: true},
                {headerName: "Product Category", field: "productCategory", sortable: true, filter: true},
                {headerName: "Status", field: "active", sortable: true, filter: true}
            ],
            rowData: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/color-templates/all")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        rowData: result
                    });
                }, (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                })
    }

    render() {
        return (
            <div className="ag-theme-alpine" style={{height: 600, width: 1200}}>
                <AgGridReact columnDefs={this.state.columnDefs} rowData={this.state.rowData}
                             rowSelection="multiple" animateRows pagination={true}
                ></AgGridReact>
            </div>
        );
    }


}


export default AgGrid;
