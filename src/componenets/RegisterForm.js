import React from 'react'
import './RegisterForm.css'  /*Importing css file*/

export default function RegisterForm() {
    return (
        <div className='registrationForm'>
            {/*Creating form for Application*/}
            <form id="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Subject</label>  {/*Setting Up DropDown Menu*/}
                    <select>
                        <option>Doctor's Appointment </option>
                        <option>Taking Leave due to family problems</option>
                        <option>Taking casual leave due to falling asleep</option>
                        <option>Taking Causual Leave due to Funeral</option>
                        <option>Taking Leave due to Vehicle Problem</option>
                    </select>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Completed Earlier Task</label>  {/*Setting Up DropDown Menu*/}
                    <select>
                        <option>Yes </option>
                        <option>No</option>
                        <option>Almost Done</option>
                    </select>

                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        </div>
    )
}


