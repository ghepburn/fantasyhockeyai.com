import React from 'react';

import DashboardContext from "./DashboardContext";
import Filter from '../../dashboard/functionality/filter/Filter';
import InputFilter from "../../dashboard/functionality/filter/InputFilter";
import DataManager from "./DataManager";

export default class DashboardState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            columns: [],
            columnFilter: {},
            rowFilter: {}
        }
    }

    setData = (data) => {
        const keys = Object.keys(data[0]);
        const columns = DataManager.orderColumns(keys);
        console.log(columns);
        this.setState({
            data: data,
            columns: columns,
            columnFilter: new Filter(columns),
            rowFilter: new InputFilter(data)

        });
    }

    setColumnFilter = (columnFilter) => {
        this.setState({
            columnFilter: columnFilter
        });
    }

    setRowFilter = (rowFilter) => {
        this.setState({
            rowFilter: rowFilter
        });
    }
    
    render() {

        const dashboardState = {
            data: this.state.data,
            setData: this.setData,
            columns: this.state.columns,
            columnFilter: this.state.columnFilter,
            setColumnFilter: this.setColumnFilter,
            rowFilter: this.state.rowFilter,
            setRowFilter: this.setRowFilter
        };

        return(
            <DashboardContext.Provider value={dashboardState}>
                {this.props.children}
            </DashboardContext.Provider>
        );
    };
}