import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


 function ShowAndBook() {
  const [concertData, setConcertData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/ShowAndId');
        const data = await response.json();
        if (Array.isArray(data)) {
          setConcertData(data);
        } else {
          setConcertData([]);
        }
      } catch (error) {
        console.error('Error:', error);
        setConcertData([]); // If there's an error, set concertData to an empty array
      }
    };
    fetchData();
  }, []);
  // const [RegisterStatus, setRegisterStatus] = useState("");
  const navigate = useNavigate();
  const [values, setValues] = useState({
    cname: '',
    cimage: '',
    tname: '',
    timage: '',
    date: '',
    time: '',
    ticket: '',
  });
    // const [RegisterStatus, setRegisterStatus] = useState("");
    // const navigate = useNavigate();
    // const [values, setValues] = useState({
    //   cname: '',
    //   cimage: '',
    //   tname: '',
    //   timage: '',
    //   date: '',
    //   time: '',
    //   ticket: '',
    // });
    // const [errors, setErrors] = useState({});
    // const [concertData, setConcertData] = useState([]); // New state to store the retrieved data
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      fetch("http://localhost:8081/ShowAndBook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tid: values.tid,
          username: values.username,
          ticket: values.ticket,
          password: values.password,
        //   data: values.date,
        //   time: values.time,
        //   ticket: values.ticket
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            // setRegisterStatus(data.message);
            navigate('/Booked');
          } else {
            // setRegisterStatus("Concert created");
            console.log(data);
            navigate('/Booked');
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
  
    const handleInput = (event) => {
      setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };
  return (
    <>
    <div className=' text-center'>
        <div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-success" > <Link className="nav-link " aria-current="page" to="/Create">Book Ticket</Link></button>
  <button type='button' className='btn btn-danger'>
            <Link className='nav-link' aria-current='page' to='/Delete'>
              Delete Ticket
            </Link>
            </button>
</div>

<div>
  
</div>

<h1>Book Ticket</h1>
<div className='text-center'>
<div>
  <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Concert Name</th>
        <th>Team Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Ticket Fee</th>
      </tr>
    </thead>
    <tbody>
      {concertData.map((concert, index) => (
        <tr key={index}>
          <td>{concert.id}</td>
          <td>{concert.cname}</td>
          <td>{concert.tname}</td>
          <td>{concert.date}</td>
          <td>{concert.time}</td>
          <td>{concert.ticket}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  <form className='mb-3'>
  <div className="mb-3 container">

    <label htmlFor="exampleFormControlInput1" className="form-label mb-3 my-3 mx-3 ">Concert ID</label>
    <input type="text" onChange={handleInput} name='tid' className=" my-2  " id="tid" placeholder="Enter ID to be booked"/>
    <label htmlFor="formFile" className="form-label col-5 "></label>
    <label htmlFor="formFile" className="form-label mb-3 my-3 mx-2  ">Username</label>
    <input className="" onChange={handleInput} name='username' type="text" alt='username' id="text"></input>
    
  </div>
  <div className="mb-3 container">
  <label htmlFor="exampleFormControlInput1" className="form-label mb-3 my-3 mx-3">Ticket</label>
    <input type="number" onChange={handleInput} name='ticket' className="my-2 mx-3 " id="ticket" placeholder="Enter Team Name"/>
    <label htmlFor="formFile" className="form-label col-5 "></label>
    <label htmlFor="formFile" className="form-label mb-3 my-3 mx-2">Password</label>
    <input className="mx-1" onChange={handleInput} name='Password' type="password" alt='password' id="Password"></input>
  </div>
  <div className="mb-3 container">
    {/* <label htmlFor="exampleFormControlInput1" className="form-label mb-3 my-3 mx-5" type="date">Date</label>
    <input type="date" onChange={handleInput} name='date' className="my-2 mx-1" id="date" placeholder="Set Date"/>
    <label htmlFor="formFile" className="form-label col-6 "></label>
    <label htmlFor="exampleFormControlInput1" className="form-label mx-2">Time</label>
    <input type="time" onChange={handleInput}name='time' className="mx-1" id="time" placeholder="Set Time"/> */}
  </div>
  <div className='text-center'>
  <div className="mb-3">

    {/* <label htmlFor="exampleFormControlInput1" className="form-label mb-3 my-3 mx-3 col-1">Ticket Charges</label>
    <input type="number" onChange={handleInput} name='ticket' className="" id="Ticket_Fee" placeholder="Ticket Fee"/> */}
  </div>

  <div><button type="submit" onClick={handleSubmit} className="btn btn-success" >Submit</button>
  </div>

  </div>
  </form>


{/* <div><button type="submit" onClick={handleSubmit} className="btn btn-success">Edit</button>
</div> */}
</div>



    </div>
    

    </>
  )
}
export default ShowAndBook;

