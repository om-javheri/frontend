import React,{useState} from 'react'
// import { Link } from 'react-router-dom'
import {  useNavigate } from 'react-router-dom'
export default function Delete() {
   //const [RegisterStatus, setRegisterStatus] = useState("");
  const navigate = useNavigate();
  const [values, setValues] = useState({
    tid: '',
    
  });

  // const [errors, setErrors] = useState({});
  // const [concertData, setConcertData] = useState([]); // New state to store the retrieved data

  
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  

  const handleSubmit = (e) => {
    
    e.preventDefault();

    fetch("http://localhost:8081/DelTicket", {
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
         // setRegisterStatus(data.message);
          navigate('/TicketDeleted');
        } else {
        //   a=values.id;
    // console.log(a);
          //setRegisterStatus("Concert created");
          console.log(data);
          navigate('/TicketDeleted');
        // navigate('/ShowAndDelete');

        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  return (
    <>
    <div className=' text-center'>
        <div class="btn-group" role="group" aria-label="Basic example">

</div>
<label htmlFor="exampleFormControlInput1" className="form-label mb-3 my-3 mx-3 ">Concert Id</label>
  <input type="number" onChange={handleInput} className="" name="id" placeholder="Concert ID to Edit" id="id" />

<div><button type="submit" onClick={handleSubmit} className="btn btn-danger my-3">Delete</button>
</div>


<div className='text-center'>



</div>



    </div>
    </>
  )
}
