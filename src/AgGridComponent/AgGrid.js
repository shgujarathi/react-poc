import React, {Component} from 'react';
import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-enterprise'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class AgGrid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {headerName: "Select", checkboxSelection: true},
                {headerName: "Template Name", field: "templateName", sortable: true, filter: true},
                {headerName: "Test Protocol", field: "testProtocol", sortable: true, filter: true},
                {headerName: "Testing Status", field: "testingStatus", sortable: true, filter: true},
                {headerName: "Product Stage", field: "productStage", sortable: true, filter: true},
                {headerName: "Product Category", field: "productCategory", sortable: true, filter: true},
                {headerName: "Status", field: "active", sortable: true, filter: true}
            ],
            rowData: []
        };
        this.onButtonClick = this.onButtonClick.bind(this)
    }

    componentDidMount() {
        console.log("componentDidMount Invoked")
        // Initially fetch api was here moved to ag grid life cycle method
    }

    onGridReady = (params) => {
        this.gridApi = params.api;

        fetch("http://localhost:8080/color-templates/all")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        rowData: result
                    });
                }, (error) => {
                    this.setState({
                        error
                    });
                })
    }

    onButtonClick = () => {
        const selectedNodes = this.gridApi.getSelectedNodes()
        const selectedData = selectedNodes.map(node => node.data)
        selectedData.map(d => console.log(d))
        alert(selectedData.map(d => d.templateName + ' ' + d.testProtocol + ' ' + d.productCategory))
        /*const selectedDataStringPresentation = selectedData.map( node => node.templateName + ' ' + node.model).join(', ')
        alert(`Selected nodes: ${selectedDataStringPresentation}`)*/
    };


    render() {
        return (
            <div className="ag-theme-alpine" style={{height: 600, width: 1400}}>
                <button onClick={this.onButtonClick}>Get selected rows</button>
                <AgGridReact columnDefs={this.state.columnDefs} rowData={this.state.rowData}
                             onGridReady={this.onGridReady}
                             rowSelection="multiple" animateRows pagination={true} paginationAutoPageSize={true}
                ></AgGridReact>
            </div>
        );
    }


}


export default AgGrid;
