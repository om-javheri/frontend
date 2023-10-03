import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
//const a=document.getElementById("id");
export default function Concert() {
  
 
  //const [RegisterStatus, setRegisterStatus] = useState("");
    const navigate = useNavigate();
    const [values, setValues] = useState({
      id:'',
      cname: '',
      cimage: '',
      tname: '',
      timage: '',
      date: '',
      time: '',
      ticket: '',
    });
   // const [errors, setErrors] = useState({});
    // const [concertData, setConcertData] = useState([]); // New state to store the retrieved data
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      fetch("http://localhost:8081/Edit2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: values.id,
          cname: values.cname,
          cimage: values.cimage,
          tname: values.tname,
          timage: values.timage,
          data: values.date,
          time: values.time,
          ticket: values.ticket
         
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            //setRegisterStatus(data.message);
            navigate('/ShowAndId');
            //a=values.id;
          } else {
            //setRegisterStatus("Concert created");
            console.log(data);
            navigate('/ShowAndId');
           // a=values.id;
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    const handleInput = (event) => {
      const { name, value } = event.target;
      setValues((prev) => ({ ...prev, [name]: value }));
    };
  
  return (

    <>
    <div className='text-center'>
        <div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-success"><Link className="nav-link " aria-current="page" to="/Create">Create New Concert</Link></button>
  <button type="button" className="btn btn-warning"><Link className="nav-link " aria-current="page" to="/Edit">Edit Concert</Link></button>
  <button type="button" className="btn btn-danger"><Link className="nav-link " aria-current="page" to="/Delete">Delete Concert</Link></button>
</div>
</div>

<h1>Edit Existing Concert</h1>
<div className='text-center'>

</div>
<div className="mb-3 container">
<label htmlFor="exampleFormControlInput1" className="form-label mb-3 my-3 mx-3 ">Concert Id</label>
  <input type="number" onChange={handleInput} className=""  name="id" placeholder="Concert ID to Edit" id="id" />

  <label htmlFor="exampleFormControlInput1" className="form-label mb-3 my-3 mx-3">Concert Name</label>
  <input type="text"  onChange={handleInput} className=" my-2" name="cname" id="Concert_Name" placeholder="Enter Concert Name"/>
  <label htmlFor="formFile" className="form-label col-5 "></label>
  <label htmlFor="formFile" className="form-label mb-3 my-3 mx-2  ">Concert Image</label>
  <input className=""  onChange={handleInput} type="file" name="cimage" alt='image' id="Concert_Image"></input>
  
</div>
<div className="mb-3 container">
<label htmlFor="exampleFormControlInput1" className="form-label mb-3 my-3 mx-3">Team Name</label>
  <input type="email"  onChange={handleInput} name="tname"className="my-2 mx-3 " id="Team_Name" placeholder="Enter Team Name"/>
  <label htmlFor="formFile" className="form-label col-5 "></label>
  <label htmlFor="formFile" className="form-label mb-3 my-3 mx-2">Team Image</label>
  <input className="mx-1"  onChange={handleInput} name="timage"type="file" alt='image' id="Team_Image"></input>
</div>
<div className="mb-3 container">
  <label htmlFor="exampleFormControlInput1" className="form-label mb-3 my-3 mx-5" type="date">Date</label>
  <input type="date"  onChange={handleInput} name="date" className="my-2 mx-1" id="date" placeholder="Set Date"/>
  <label htmlFor="formFile" className="form-label col-6 "></label>
  <label htmlFor="exampleFormControlInput1" className="form-label mx-2">Time</label>
  <input type="time"  onChange={handleInput} className="mx-1" name="time" id="time" placeholder="Set Time"/>
</div>
<div className='text-center'>
<div className="mb-3">

  <label htmlFor="exampleFormControlInput1" className="form-label mb-3 my-3 mx-3 col-1">Ticket Charges</label>
  <input type="number"  onChange={handleInput} className="" name="ticket" id="Ticket_Fee " placeholder="Ticket Fee"/>
</div>

<div><button type="submit" onClick={handleSubmit} className="btn btn-success">Submit</button>
</div>
</div>



    
    </>



   
  )
}
