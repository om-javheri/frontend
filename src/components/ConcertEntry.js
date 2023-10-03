// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { loginStatus, IntegerProvider }  from './loginStatus';
// import { useNavigate } from 'react-router-dom';

// export default function ConcertEntry() {
//   const navigate = useNavigate();
//   const { sharedInteger, setSharedInteger } = useContext(loginStatus);

//   return (
//     <>
//       {sharedInteger ? (
//         <div>
//           Log in to your admin account first
//           <Link to='/Login' className='btn btn-default-border w-100 bg-light text-decoration-none'>
//             Log in
//           </Link>
//         </div>
//       ) : (
//         navigate('/Concert')
//       )}
//     </>
//   );
// }
