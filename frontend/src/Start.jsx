import React from 'react'
import { useNavigate } from 'react-router-dom'
import adm from './assets/adm.png'
import emp from './assets/emp.png'

function Start() {
    const navigate = useNavigate()
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-5 rounded w-25 h-75 border loginForm text-center'>
                <h2 className='mt-3'>Login As</h2>
                <hr/>
                <div className='d-flex flex-column gap-4'>
                  <img src={adm} className='w-10 px-5'/>
                    <button className='btn btn-primary btn-lg' onClick={e => navigate('/employeeLogin')}>Employee</button>
                    <button className='btn btn-success btn-lg' onClick={e => navigate('/login')}>Admin</button>
                </div>
            </div>
        </div>
  )
}

export default Start