import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
export default function CreateTicket() {
    // const [RegisterStatus, setRegisterStatus] = useState("");
    const navigate = useNavigate();
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
    // // const [concertData, setConcertData] = useState([]); // New state to store the retrieved data
  
    // const handleSubmit2 = (e) => {
    //   e.preventDefault();
  
    //   fetch("http://localhost:8081/Edit", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       cname: values.id
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       if (data.message) {
    //         setRegisterStatus(data.message);
    //         navigate('/Edit2');
    //       } else {
    //         setRegisterStatus("Concert created");
    //         console.log(data);
    //         navigate('/Edit2');
    //       }
    //     })
    //     .catch((error) => {
    //       console.error("Error:", error);
    //     });
    // };
  
    // const handleInput = (event) => {
    //   setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    // };
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
     navigate('/ShowAndBook');
    };
  
  
  return (
    <div>
        <>
    <div className=' text-center'>
        <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-success" > <Link className="nav-link " aria-current="page" to="/ShowAndBook">Book Ticket</Link></button>
  <button type='button' className='btn btn-danger'>
            <Link className='nav-link' aria-current='page' to='/Delete'>
              Delete Ticket
            </Link>
            </button>
</div>

<div><button type="submit" onClick={handleSubmit} className="btn btn-success my-3">Show Concerts</button>
</div>

<h1>Show Concert</h1>
<div className='text-center'>



</div>



    </div>
    </>
    </div>
  )
}
