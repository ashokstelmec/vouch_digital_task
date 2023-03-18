import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const Nav = () => {
    const navigate = useNavigate();
    const handleAddClient = () => {
    navigate("/addclient");
    }
    const handleViewClient = () => {
    navigate("/vClient");
    }

    const handleView = () => {
        const bars = document.querySelector('.left');
        bars.classList.toggle("toggle")
    }

return (
<>
    <DensityMediumIcon className='d-lg-none d-md-none d-sm-block position-absolute position z-2' onClick={handleView} />
    <div className='p-3 h-auto dNone d-lg-flex flex-lg-column justify-content-lg-between d-md-flex flex-md-column justify-content-md-between flex-sm-column flex-column justify-content-between justify-content-sm-between left bg-white position-relative'>
       <div  className=''>
       <h3 className='fs-5'>Company name</h3>
        <div className='position-relative'>
            <SearchIcon className=' position-absolute' />
            <input type="text" placeholder='Search modules' className=' rounded-5 form-control search' />
        </div>
        <h4 className='mt-4 color fs-6 text-uppercase'>client master</h4>
        <ul className='list-unstyled d-flex flex-column gap-3 text-capitalize'>
            <li className='p-2 rounded-2' onClick={handleViewClient}> View clients </li>
            <li className='p-2 rounded-2 active' onClick={handleAddClient}>Add client</li>
        </ul>
       </div>

        <div className='d-lg-flex d-md-flex d-sm-block gap-5'>
            <div className='d-flex gap-2'>
                <img src="image/user.png" alt="user" />
                <div className="info d-flex flex-column">
                    <span className='fw-bold fs-6'>James Burton</span>
                    <span><a href="mailto:james@thevouch.digital"
                            className='text-decoration-none text-dark'>james@thevouch.digital</a></span>
                </div>
            </div>
            <div className='mt-sm-3 text-sm-center mt-x mt-xs-3 text-xs-center'>
                <LogoutIcon />
            </div>
        </div>
    </div>
</>
)
}

export default Nav