import React, {Component} from 'react';

import Filter from "./functionality/filter/utils/Filter";

export default class TableState extends Component {
    state = {
        data: [],
        archive: [],
        columnFilters: {}
    }

    columns = Object.keys(this.state.data[0]);


    constructor(data, setData) {
        this.data = data;
        this.setDataState = setData;
        this.columns = Object.keys(data[0]);

        this.columnFilters = new Filter(this.columns); 
        
    }

    setData = (data) => {
        let archive = this.state.archive;
        archive.push(data);
        this.setState({
            archive: archive,
            data: data
        });
    }

    getData = () => {
        return JSON.parse(JSON.stringify(this.state.data));
    }

    getColumnFilters = () => {}

    setColumnFilters = () => {}

    setColumnFilters = (columnFilters) => {
        this.columnFilters = columnFilters;
        }
    }
}