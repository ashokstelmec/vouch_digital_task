import { Form, Button } from 'react-bootstrap';
import AddClient from './AddClient';
import ButtonEl from './Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";
import DoneIcon from '@mui/icons-material/Done';
import Nav from './Nav';



const Modules = () => {
const navigate = useNavigate();
const handleSuccess = () => {
navigate("/successfull")
}
return (
<>
    <div className="d-flex bg-color">
        <Nav />
        <div className="d-flex flex-column w-100">
            <AddClient />
            <div className='ms-3 me-3 bg-white'>
                <div className='p-3'>
                    <h3 className='text-capitalize'>Modules Setup</h3>
                    <p>Select the modules that the client can use..</p>
                </div>

                <Form.Group className="ms-4 position-relative" controlId="formBasicCheckbox">
                    <ul className='list-unstyled w-25 hover'>
                        <li className='p-2 rounded m-1'>
                            <Form.Check type="checkbox" label="Home / Dashboard" />
                        </li>
                        <li className='p-2 rounded m-1'>
                            <Form.Check type="checkbox" label="Helpdesk" />
                        </li>
                        <li className='p-2 rounded m-1'>
                            <Form.Check type="checkbox" label="Assets" />
                        </li>
                        <li className='p-2 rounded m-1 position-relative'>
                            <Form.Check type="checkbox" label="Daily Tasks" />
                            <ArrowForwardIosIcon className='position-absolute d-task' />
                        </li>
                        <li className='p-2 rounded m-1'>
                            <Form.Check type="checkbox" label="PPM" />
                        </li>
                        <li className='p-2 rounded m-1'>
                            <Form.Check type="checkbox" label="Employees" />
                        </li>
                        <li className='p-2 rounded m-1'>
                            <Form.Check type="checkbox" label="Profile" />
                        </li>
                        <li className='p-2 rounded m-1'>
                            <Form.Check type="checkbox" label="Transactions" />
                        </li>
                    </ul>
                </Form.Group>

                <div className='shadow p-3 d-lg-block d-md-block d-sm-none position-absolute w-50 none'>
                    <div className='d-flex justify-content-between align-items-center border-bottom p-2'>
                        <div className='d-flex gap-2 align-items-center'>
                            <div>
                                <img src="image/Vector.png" className='p-2 bg-color rounded' alt="pic" />
                            </div>
                            <div className='d-fle'>
                                <h5 className='text-capitalize m-0'>daily tasks</h5>
                                <p className='m-0'>Select the sub modules that the client can use.</p>
                            </div>
                        </div>
                        <div>
                            <Button variant='transprant' className='ms-2 btn-color text-white' type='button'>
                                <DoneIcon /> Visible to Client
                            </Button>
                        </div>
                    </div>
                    <Form.Group controlId="formBasicCheckbox">
                        <ul className='list-unstyled w-50 pt-2'>
                            <li>
                                <Form.Check type="checkbox" label="Home / Dashboard" />
                            </li>
                            <li>
                                <Form.Check type="checkbox" label="Helpdesk" />
                            </li>
                            <li>
                                <Form.Check type="checkbox" label="Assets" />
                            </li>
                            <li>
                                <Form.Check type="checkbox" label="Daily Tasks" />
                            </li>
                            <li>
                                <Form.Check type="checkbox" label="PPM" />
                            </li>
                            <li>
                                <Form.Check type="checkbox" label="Employees" />
                            </li>
                            <li>
                                <Form.Check type="checkbox" label="Profile" />
                            </li>
                            <li>
                                <Form.Check type="checkbox" label="Transactions" />
                            </li>
                        </ul>
                    </Form.Group>
                </div>

                <div className="d-flex gap-2 p-2">
                    <Button variant="primary" type="submit" onClick={handleSuccess}>
                        Save & Continue
                        <ArrowForwardIosIcon />
                    </Button>
                    <ButtonEl />
                </div>
            </div>
        </div>
    </div>
</>

)
}

export default Modules