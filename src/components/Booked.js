import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
export default function Booked() {
    const [concertData, setConcertData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/Booked');
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

  return (
    <>
    <div>Booked</div>
    <>
      <div className='text-center'>
        <div className='btn-group' role='group' aria-label='Basic example'>
          <button type='button' className='btn btn-success'>
            <Link className='nav-link' aria-current='page' to='/CreateTicket'>
              Book Ticket
            </Link>
          </button>
         
          <button type='button' className='btn btn-danger'>
            <Link className='nav-link' aria-current='page' to='/Delete'>
              Delete Ticket
            </Link>
          </button>
        </div>
      </div>
      <h2>Your ticket is Booked</h2>
      <div>
  <table className="table">
    <thead>
      <tr>
        <th>Ticket ID</th>
        <th>Concert ID</th>
        <th>Username</th>
        <th>Password</th>
        
        <th>Ticket Fee</th>
      </tr>
    </thead>
    <tbody>
      {concertData.map((concert, index) => (
        <tr key={index}>
          <td>{concert.id}</td>
          <td>{concert.tid}</td>
          <td>{concert.username}</td>
          <td>********</td>
          
          <td>{concert.ticket}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </>
    </>
  )
}
