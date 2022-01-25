const calender=(params)=>{
    alert(params.data.email)
}
const notes=(params)=>{
    alert(params.value)
}








export const COLUMNS = [
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
       width: 170,
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
       cellRendererFramework:(params)=>
           <div className="connect"><span onClick={()=>calender(params)}><i class="far fa-calendar-alt"></i>&nbsp;&nbsp;&nbsp;Calender</span></div>
       
   },

   {
       headerName: '',
       field: 'Name',
       width: 110,
       cellRendererFramework:(params)=>
           <div  className="connect"><span onClick={()=>notes(params)}><i class="far fa-clipboard"></i>&nbsp;&nbsp;&nbsp;Notes</span></div>
   },

]


