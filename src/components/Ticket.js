import React from 'react'
import { Link } from 'react-router-dom'
export default function Ticket() {
  return (
    
       <>
    <div className=' text-center'>
        <div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-success" > <Link className="nav-link " aria-current="page" to="/CreateTicket">Book Ticket</Link></button>
  <button type='button' className='btn btn-danger'>
            <Link className='nav-link' aria-current='page' to='/DelTicket'>
              Delete Ticket
            </Link></button>
</div>



    </div>
    </>
    
  )
}
