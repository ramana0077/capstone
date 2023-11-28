import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Profile() {
  const [adminCount, setAdminCount] = useState()
  const [employeeCount, setEmployeeCount] = useState()
  const [salary, setSalary] = useState()

  useEffect(() => {
    axios.get('http://54.205.25.199:8081/adminCount')
		.then(res => {
			setAdminCount(res.data[0].admin)
		}).catch(err => console.log(err));

    axios.get('http://54.205.25.199:8081/employeeCount')
		.then(res => {
			setEmployeeCount(res.data[0].employee)
		}).catch(err => console.log(err));

    axios.get('http://54.205.25.199:8081/salary')
		.then(res => {
			setSalary(res.data[0].sumOfSalary)
		}).catch(err => console.log(err));

  } , [])
  return (
    <div>
      <div className='p-3 d-flex justify-content-around mt-3'>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Admin</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Total: {adminCount}</h5>
          </div>
        </div>
      </div>

      {/* List of admin  */}
      <div className='mt-4 px-5 pt-3'>
        <h3>List of Admins</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Admin</td>
              <td>admin@gmail.com</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Ninad Vyas</td>
              <td>ninad190@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Profile