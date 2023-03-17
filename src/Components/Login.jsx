import React, { useState } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const [formData, setFormData] = useState({username : "", password : ""});

    const {username, password} = formData;


    const navigate = useNavigate();
    const loginClick = (e) => {
    e.preventDefault();
    if(username === "" || password === ""){
    return;
    };

    fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
    localStorage.setItem("AUTH_TOKEN", JSON.stringify(data));
    navigate("/vClient");
    })
    .catch((error) => {
    console.error("Error:", error);
    });

    }

    const PasswordChange =(e)=>{
        setPasswordInput(e.target.value);
        setFormData((prev) => ({
        ...prev, [e.target.name]: e.target.value
        }))
    }

    const togglePassword =()=>{
    if(passwordType==="password")
    {
    setPasswordType("text")
    return;
    }
    setPasswordType("password");
    }

return (
<>

    <div className='d-lg-flex d-md-flex d-sm-block'>
        <div className='w-25 container d-flex flex-column justify-content-center'>
            <h1 className='text-center text-capitalize'>welcome</h1>
            <p className='text-center color'>Enter your Username and Passoword.</p>

            <form>
                <div className='position-relative'>
                    <PersonOutlineIcon className='position-absolute icon color' />
                    <input type="email" name='username' value={username} placeholder='Username'
                        onChange={PasswordChange} className='form-control mb-4 border rounded-2 input' />
                </div>

                <div className='position-relative'>
                    <LockIcon className='position-absolute icon color' />
                    <input type="password" name='password' value={password} onChange={PasswordChange}
                        placeholder='Password' className='form-control border mb-4 rounded-2 input' />
                    <div onClick={togglePassword}>
                        {passwordType === "password" ?
                        <VisibilityOffIcon className='position-absolute icon-2 color' /> :
                        <VisibilityIcon className='position-absolute icon-2 color' />
                        }
                    </div>
                </div>
                <input type="button" value="Login" onClick={loginClick} 
                    className='mb-4 w-100 rounded-2 text-white bg-primary fs-2 border' />
            </form>
                <div className='text-center'>
                    <a href='/' className='text-dark text-decoration-none center'>Forgot Password?</a>
                </div>
                <div className='text-center'>
                    <p><span>Terms of Use</span><span>Privacy Policy</span></p>
                    <p>&#169; Punctualiti 2022. All rights reserved</p>
                </div>
        </div>


        <div className=' btn-color text-center text-white p-4'>
            <img src="image/login.png" className='w-75 h-75' alt="" />
            <h5>360° Solution for Asset Management</h5>
            <p className='p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et
                dolore magna aliqua.</p>
        </div>
    </div>


</>
)
}

export default Login