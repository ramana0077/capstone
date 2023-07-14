import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [data, setData] = useState([])
  const [adminCount, setAdminCount] = useState()
  const [employeeCount, setEmployeeCount] = useState()
  const [salary, setSalary] = useState()

  useEffect(()=> {
    axios.get('http://localhost:8081/getEmployee')
    .then(res => {
      if(res.data.Status === "Success") {
        setData(res.data.Result);
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));

    axios.get('http://localhost:8081/adminCount')
    .then(res => {
      setAdminCount(res.data[0].admin)
    }).catch(err => console.log(err));

    axios.get('http://localhost:8081/employeeCount')
    .then(res => {
      setEmployeeCount(res.data[0].employee)
    }).catch(err => console.log(err));

    axios.get('http://localhost:8081/salary')
    .then(res => {
      setSalary(res.data[0].sumOfSalary)
    }).catch(err => console.log(err));


  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:8081/delete/'+id)
    .then(res => {
      if(res.data.Status === "Success") {
        window.location.reload(true);
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  }

  return (
    <div >
   <div className='p-3 d-flex justify-content-around mt-3'>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Employee</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Total: {employeeCount}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Payroll</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Total: {salary}</h5>
          </div>
        </div>
      </div>
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-left mt-2'>
        <h3>Employee List</h3>
      </div>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee, index) => {
              return <tr key={index}>
                  <td>{employee.name}</td>
                  <td>{
                    <img src={`http://localhost:8081/images/`+employee.image} alt="" className='employee_image'/>
                    }</td>
                  <td>{employee.email}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default Home

