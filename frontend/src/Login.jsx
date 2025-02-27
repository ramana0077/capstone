import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://54.92.222.153:8081/login', values)
        .then(res => {
            if(res.data.Status === 'Success') {
                navigate('/');
            } else {
                setError(res.data.Error);
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 border loginForm'>
                <div className='text-danger'>
                    {error && error}
                </div>
                <h2 className='text-center mt-5'>Admin</h2>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3 mt-5'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email' 
                          onChange={e => setValues({...values, email: e.target.value})} className='form-control rounded-3 ' autoComplete='off'/>
                    </div>
                    <div className='mb-3 mt-2'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                          onChange={e => setValues({...values, password: e.target.value})} className='form-control rounded-3' />
                    </div>
                    <button type='submit' className='btn btn-success w-100 text-center rounded-3 mt-3'> Log in</button>
                    
                </form>
            </div>
        </div>
    )
}

export default Login
