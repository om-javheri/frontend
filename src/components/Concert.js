import React from 'react'
import { Link } from 'react-router-dom'

export default function Concert() {
  return (
    <>
    <div className=' text-center'>
        <div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-success" > <Link className="nav-link " aria-current="page" to="/Create">Create New Concert</Link></button>
  <button type="button" className="btn btn-warning"><Link className="nav-link " aria-current="page" to="/Edit">Edit Concert</Link></button>
  <button type="button" className="btn btn-danger"><Link className="nav-link " aria-current="page" to="/Delete">Delete Concert</Link></button>
</div>



    </div>
    </>
  )
}
