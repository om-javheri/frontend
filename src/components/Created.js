import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Created() {
  const [concertData, setConcertData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/Created');
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
      <div className='text-center'>
        <div className='btn-group' role='group' aria-label='Basic example'>
          <button type='button' className='btn btn-success'>
            <Link className='nav-link' aria-current='page' to='/Create'>
              Create New Concert
            </Link>
          </button>
          <button type='button' className='btn btn-warning'>
            <Link className='nav-link' aria-current='page' to='/Edit'>
              Edit Concert
            </Link>
          </button>
          <button type='button' className='btn btn-danger'>
            <Link className='nav-link' aria-current='page' to='/Delete'>
              Delete Concert
            </Link>
          </button>
        </div>
      </div>
      <h2>New concert added</h2>
      <div>
  <table className="table">
    <thead>
      <tr>
        <th>Concert ID</th>
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

    </>
  );
}
