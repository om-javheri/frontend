import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './SignupValidation';

export default function Signup() {
  // const [name, setname] = useState("");
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");
  //const [registerStatus, setregisterStatus] = useState("");
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values))

    fetch("http://localhost:8081/Signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
       //   setregisterStatus(data.message);
        } else {
         // setregisterStatus("Account created");
          console.log(data)
          navigate('/Login')
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
    <div>
      <div className='d-flex justify-content-center align-items-center bg-primary vh-100 '>
        <div className='bg-white p-3 rounded w-25'>
          <form className="mb-3">
            <div>
              <label htmlFor='text'><strong>Name</strong></label>
              <input type='text' onChange={handleInput} className='form-control rounded-0' id="name" name="name" placeholder='Enter Name' />
              {errors.name && <span className='text-danger'>{errors.name}</span>}
            </div>
            <div>
              <label htmlFor='email'><strong>Email</strong></label>
              <input type='email' onChange={handleInput} className='form-control rounded-0' id="email" name="email" placeholder='Enter Email' />
              {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div>
              <label htmlFor='password'><strong>Password</strong></label>
              <input type='password' onChange={handleInput} className='form-control rounded-0' id="password" name="password" placeholder='Enter Password' />
              {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
            <button type="submit" onClick={handleSubmit} className='btn btn-success w-100' >Sign up</button>
            <p>You agree to terms and conditions*</p>
            <Link to='/Login' className='btn btn-default-border w-100 bg-light text-decoration-none'>Log in</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
