import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import validation from './SignupValidation';
import { useNavigate } from 'react-router-dom';
// import { loginStatus, IntegerProvider }  from './loginStatus';

export default function Login() {
  // const { sharedInteger, setSharedInteger } = useContext(loginStatus);

  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");
  const [loginStatus2, setloginStatus2] = useState("");
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values))

    fetch("http://localhost:8081/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setloginStatus2(data.message);
          console.log(data.message)
          // setSharedInteger(0);
        } else {
          setloginStatus2(data[0].email);
          console.log(data[0].email)
          if(data[0].email===loginStatus2){
            // setSharedInteger(0);
            navigate('/Concert')}
          
          
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // setSharedInteger(0);
      });
  };

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <div>
      {/* <div>{sharedInteger}</div>; */}
      <div className='d-flex justify-content-center align-items-center bg-primary vh-100 '>
        <div className='bg-white p-3 rounded w-25'>
          <form className="mb-3">
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
            <button type="submit" onClick={handleSubmit} className='btn btn-success w-100' >Log in</button>
            <p>You agree to terms and conditions*</p>
            <Link to='/Signup' className='btn btn-default-border w-100 bg-light text-decoration-none'>Sign up</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
