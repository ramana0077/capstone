import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function EmployeeDetail() {
    const {id} = useParams();
    const navigate = useNavigate()
    const [employee, setEmployee] = useState([])
    useEffect(()=> {
        axios.get('http://54.92.222.153:8081/get/'+id)
        .then(res => setEmployee(res.data.Result[0]))
        .catch(err => console.log(err));
    })
    const handleLogout = () => {
		axios.get('http://54.92.222.153:8081/logout')
		.then(res => {
			navigate('/start')
		}).catch(err => console.log(err));
	}
  return (
    <div>
        <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
            <img src={`http://54.92.222.153:8081/images/`+employee.image} alt="" className='empImg'/>
            <div className='d-flex align-items-center flex-column mt-5'>
                <h3>Name: {employee.name}</h3>
                <h3>Email: {employee.email}</h3>
                <h3>Address: {employee.address}</h3>
                <h3>Salary: {employee.salary}</h3>
               
            </div>
            <div>
            <Link to={`/Employeeonlyedit/`+employee.id} className='btn btn-primary me-2'>Edit</Link>
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default EmployeeDetail