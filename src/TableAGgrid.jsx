import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function createData(name, size, mDate) {
    return { name, size, mDate };
}

function BasicTable({ files, onDelete }) {
    // Prepare rows for AG Grid
    const rowData = files.map(file => createData(file.name, file.size / 1000, file.lastModifiedDate));

    // Define column definitions
    const columnDefs = [
        { headerName: 'File name', field: 'name' },
        { headerName: 'Size (KB)', field: 'size', type: 'numberColumn' },
        { headerName: 'Last modified', field: 'mDate', valueFormatter: params => new Date(params.value).toLocaleString() },
        {
            headerName: 'Action',
            cellRenderer: params => (
                <button onClick={() => onDelete(params.data.name)} style={{ height: '28px', width: '80px',fontSize: '14px',padding:'0', margin:'0' }}>
                    Delete
                </button>
            ),
        }
    ];

    return (
        <div className="ag-theme-alpine" style={{ height: 300, width: '100%' }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={{ flex: 1, minWidth: 100 }}
            />
        </div>
    );
}

export default BasicTable;
