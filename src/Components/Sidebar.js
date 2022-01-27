import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { DefaultAC } from './DefaultAC'
// import filter from './Maincontact'
import Column from './Column'
import MOCK_DATA from './MOCK_DATA.json'



function Sidebar() {
    const deleteAll = () => {
        console.log("delete all")
    }
    const [users, setUsers] = useState([])
    useEffect(() => {
        setUsers(DefaultAC);

    }, []);
    
    function handleChange(e) {
        const { name, checked } = e.target;
        if(name ==="allSelect"){
          let tempUser =users.map(user=>{return {...user,isChecked : checked}})
          setUsers(tempUser);
        }else{

            let tempUser = users.map((user) => user.email === name? { ...user, isChecked: checked } : user);
            setUsers(tempUser)
        }
    };
    return (
        <div className='Sidebox1'>
            <div className=' Heading' >Contacts Manager
            </div>
            <div className='Sidebox2'>
                <div className='form'>
                    <div className='head1'>
                        <input type="checkbox"  onChange={handleChange} name='allSelect'checked ={users.filter(user=>user?.isChecked!==true).length < 1}/>
                        <label htmlFor="title" >All Contact</label>
                        <div className='btn' onClick={deleteAll}> Clear All</div>
                    </div>
                    {users.map((user,key) => {
                        return (
                            <div className='accounts' key={key}>
                                <div className='title'>{user.title}</div>
                                <div className='email'> 
                                <input type="checkbox" name={user.email}  checked ={user?.isChecked || false}
                                     onChange={handleChange}  />
                                    <label htmlFor="title" className="form-label">&nbsp;&nbsp;&nbsp;{user.email}</label>
                                </div>
                            </div>

                        )
                    })}

                </div>
                <hr className='gap' />
                <div className='sidebelow'>
                    <ul>
                        <li><i className="fas fa-link"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Merge and Link</li>
                        <li><i className="fas fa-plus"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Account</li>
                        <li><i className="fas fa-upload"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Upload</li>
                    </ul>
                </div>

            </div>
        </div>

    )
}

export default Sidebar
