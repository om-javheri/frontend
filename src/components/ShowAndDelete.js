import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// let a=0;

 function ShowAndDelete() {
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
    id:'',
   
  });
 // const [errors, setErrors] = useState({});
  // const [concertData, setConcertData] = useState([]); // New state to store the retrieved data

  const handleSubmit = (e) => {
    
    e.preventDefault();

    fetch("http://localhost:8081/ShowAndDelete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: values.id,

       
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
        //   a=values.id;
    // console.log(a);
        //  setRegisterStatus(data.message);
          navigate('/Delete2');
        } else {
        //   a=values.id;
    // console.log(a);
        //  setRegisterStatus("Concert created");
          console.log(data);
          navigate('/Delete2');
        // navigate('/ShowAndDelete');

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
  <button type="button" className="btn btn-success" > <Link className="nav-link " aria-current="page" to="/Create">Create New Concert</Link></button>
  <button type="button" className="btn btn-warning"><Link className="nav-link " aria-current="page" to="/Edit">Edit Concert</Link></button>
  <button type="button" className="btn btn-danger"><Link className="nav-link " aria-current="page" to="/Delete">Delete Concert</Link></button>
</div>

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

<h1>Delete Concert</h1>
<div className='text-center'>

<label htmlFor="exampleFormControlInput1" className="form-label mb-3 my-3 mx-3 ">Concert Id</label>
  <input type="number" onChange={handleInput} className="" name="id" placeholder="Concert ID to Edit" id="id" />

<div><button type="submit" onClick={handleSubmit} className="btn btn-success">Delete</button>
</div>
</div>



    </div>
    </>
  )
}
export default ShowAndDelete;

