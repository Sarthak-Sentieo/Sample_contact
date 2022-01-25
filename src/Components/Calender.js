import React from 'react'
import './calender.css'
import { SharedCalender } from './SharedCalender'
function Calender() {
    return (
        <div className='toggle '>
            <div className='heading'>
                Upcoming Events
            </div>
            <div>
                {SharedCalender.map((sharedcalender)=>{return(
                <ul className='shared'>
                    <div>
                    <li><span className='title1'>{sharedcalender.title}</span><span className='icon'><i class="fas fa-external-link-alt"></i></span></li>
                    <span className='time'>{sharedcalender.date}</span>
                    </div>
                </ul>
                )})}
            </div>
            <div className='heading space' >
                Previous Events
            </div>
            <div>
                {SharedCalender.map((sharedcalender)=>{return(
                <ul className='shared'>
                    <div>
                    <li><span className='title1'>{sharedcalender.title}</span><span className='icon'><i class="fas fa-external-link-alt"></i></span></li>
                    <span className='time'>{sharedcalender.date}</span>
                    </div>
                </ul>
                )})}
            </div>
        </div>
    )
}

export default Calender
