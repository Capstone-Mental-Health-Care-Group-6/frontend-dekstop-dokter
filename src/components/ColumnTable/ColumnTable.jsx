import React from 'react'
import { Link } from 'react-router-dom'
import { Column } from 'primereact/column';

function ColumnTable({ field, header, body, headerClassName }) {
     
    return (
        <Column field={field} header={header} body={body} headerClassName={headerClassName} />
    )
}

export default ColumnTable