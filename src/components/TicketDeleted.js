import React from 'react';
import { useNavigate } from 'react-router-dom';
// let a=0;

 function ShowAndDelete() {
    const navigate=useNavigate();
const handleSubmit=()=>{
    navigate('/DelTicket');

}


  return (
    <>
    <div className=' text-center'>
        <div className="btn-group" role="group" aria-label="Basic example">
</div>



<div className='text-center'>

<label htmlFor="exampleFormControlInput1" className="form-label mb-3 my-3 mx-3 ">Ticket Deleted</label>
  {/* <input type="number" onChange={handleInput} className="" name="id" placeholder="Concert ID to Edit" id="id" /> */}

<div><button type="submit" onClick={handleSubmit} className="btn btn-success">Back</button>
</div>
</div>



    </div>
    </>
  )
}
export default ShowAndDelete;

