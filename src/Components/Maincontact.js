import './Maincontact.css';
import './calender.css'
import React, { useMemo, useState } from 'react'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './Column'
import Calender from './Calender';
import Notes from './Notes';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'



export const Maincontact = () => {

  return (
    <div className='main'>
      <div id="myGrid" style={{
        height: '100%',
        width: '100%',
      }} className="ag-theme-alpine ">
        <AgGridReact
          defaultColDef={{
            enableValue: true,
            sortable: true,
            filter: true,
            resizable: true,
            columnHoverHighlight: true,
          }}
          rowData={MOCK_DATA}
          columnDefs={COLUMNS} >


        </AgGridReact>
      
      </div>
      
      <Calender />

       <Notes/>
    </div>

  )
}
export default Maincontact

