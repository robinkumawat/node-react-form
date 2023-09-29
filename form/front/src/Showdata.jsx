import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom";
function Showdata() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchStudentsData();
  }, []);
  async function fetchStudentsData() {
    const result = await axios.get("http://localhost:5000/student");
    setData(result.data);
  }

  function handleDelete(id) {

    const result = axios.delete(`http://localhost:5000/student/delete/${id}`);
    // if (result.status === 200 && result.statusText === "OK");
    // fetchData()

  }
  return (
    <>
      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student) => {
              return (
                <tr className='record' key={Date().now}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.phone}</td>
                  <td>
                    <button onClick={() => handleDelete(student.id)}>
                      Delete
                    </button>{" "}
                    ||<button>Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        ""
      )}
      <Link to="/add"> Add Data</Link>
    </>
  )
}

export default Showdata