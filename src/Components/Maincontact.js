import './Maincontact.css';
import './calender.css'
import React, { useEffect, useMemo, useState,useRef } from 'react'
import MOCK_DATA from './MOCK_DATA.json'
import Calender from './Calender';
import { Column } from './Column'
import Notes from './Notes';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

 const off =()=>{
   var el = document.getElementsByClassName("toggle");
   el[0].classList.remove("show")

 }
const calender =(params)=>{
        console.log(params);
        const element = document.getElementsByClassName("toggle");
        element[0].classList.add("show")
      }
const notes=(params)=>{
    console.log(params);
    const element = document.getElementsByClassName("toggle2");
    element[0].style.cssText="display: inline-block; left:980px ;opacity: 1;" ;
  }





export const Maincontact = () => {
  const ref = useRef()
  const[isopen,setisopen] =useState(false)

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (isopen && ref.current && !ref.current.contains(e.target)) {
        setisopen(false)
      }
    }

    document.addEventListener("click", checkIfClickedOutside)

    return () => {
      document.removeEventListener("click", checkIfClickedOutside)
      console.log("outside")
    }
  }, [isopen])

  // const [action,setaction]=useState(true);
  // const [back,setback]=useState(false);
  // useEffect(() => {
  //   if( !action)
  //     calender()
  //   setback (!action)
  // }, [action]);
  const Column = [
    {
        headerName: 'Name',
        field: 'Name',
        width: 170,
      
    },
    {
        headerName: 'Email',
        field: 'email',
        width: 210,
    },
    {
        headerName: 'Phone Number',
        field: 'phone_number',
        width: 150,
        
    },
    {
        headerName: 'Company',
        field: 'company_name',
        width: 190,
    },
    {
        headerName: 'Job Title',
        field: 'job_title',
        width: 150,
    },
    {
        headerName: 'Directory',
        field: 'directory',
        width: 130,
    },
 
    {
        headerName: '',
        field: 'Name',
        width: 90,
        filter:null,
        sortable: false,
        cellRendererFramework:(params)=>
            // <div className="connect "><span onClick={()=>setaction(!action)}><i className="far fa-calendar-alt"></i>&nbsp;&nbsp;&nbsp;Calender</span></div>
            <div  className="connect"><span onClick={() => setisopen(oldState => !oldState)}><i className="far fa-calendar-alt"></i>&nbsp;&nbsp;&nbsp;Calender</span></div>
            
        
    },
 
    {
        headerName: '',
        field: 'Name',
        width: 110,
        filter:null,
        sortable: false,
        cellRendererFramework:(params)=>
            <div  className="connect"><span onClick={()=>notes(params)}><i className="far fa-clipboard"></i>&nbsp;&nbsp;&nbsp;Notes</span></div>
            
    },
 
 ]
 
  return (
    <div className='main' ref={ref}   >
    {/* // <div className='main' onClick={back?off:null}> */}
      <div id="myGrid" style={{
        height: '100%',
        width: '100%',
      }} className="ag-theme-alpine " >
        <AgGridReact
          defaultColDef={{
            enableValue: true,
            sortable: true,
            filter: true,
            resizable: true,
            columnHoverHighlight: true,
          }}
          rowData={MOCK_DATA}
           columnDefs={Column}  
          >
        </AgGridReact>
      </div>

      {isopen && <Calender  /> }

      {/* <Calender /> */}
       
       <Notes/>
    </div>

  )
}
export default Maincontact

