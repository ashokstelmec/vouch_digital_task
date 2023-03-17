import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import { Form, Button } from 'react-bootstrap';
import ButtonEl from './Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Nav from './Nav';
import { useNavigate } from "react-router-dom";
import AddClient from './AddClient';



const Theme = () => {
const navigate = useNavigate();
const handleModule = () => {
navigate("/moduleForm")
}
return (
<>
    <div className="d-flex bg-color">
        <Nav />
        <div className="d-flex flex-column w-100">
            <AddClient />
            <div className='ms-3 me-3 p-4 rounded-bottom-2 bg-white'>
                <div>
                    <h3 className='text-capitalize'>Theme Setup</h3>
                    <p>Add information about the client to give them a personalized experience.</p>
                </div>

                <TextField label="Primary Color" id="outlined-size-small" defaultValue="#153AC7" size="small" />
                <FormHelperText id="component-helper-text">
                    Add Hex Value.
                </FormHelperText>

                <div>
                    <h6>Login Theme</h6>
                    <p>Select the look and feel of the login page.</p>
                    <Form.Check inline type="radio" name='radio' label="Use Color" />
                    <Form.Group className="mb-3 col-lg-6 col-md-6 col-sm-12 mt-lg-0 mt-md-3 mt-sm-3"
                        controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Amount" defaultValue="#F8F9FD" className='ms-4' />
                    </Form.Group>
                </div>
                <div>
                    <h6>Where Should be the login modal?</h6>
                    <div className='d-flex justify-content-justify-content-evenly w-50 gap-5'>
                        <div className='d-flex flex-column w-100'>
                            <div className='w-1 p-3 position-relative'>
                                <div className='w-2 rounded-2 justify-content-end align-items-end position-absolute'>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Form.Check inline type="radio" name='radio' label="Left" />
                            </div>
                        </div>
                        <div className='d-flex flex-column w-100'>
                            <div className='w-1 p-3 position-relative'>
                                <div
                                    className='w-2 rounded-2 justify-content-end align-items-end position-absolute right'>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Form.Check inline type="radio" name='radio' label="Right" />
                            </div>
                        </div>
                        <div className='d-flex flex-column w-100'>
                            <div className='w-1 p-3 position-relative'>
                                <div
                                    className='w-2 rounded-2 justify-content-end align-items-end position-absolute center'>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Form.Check inline type="radio" name='radio' label="Center" />
                            </div>
                        </div>

                    </div>

                </div>

                <div className="d-flex gap-2 mt-2">
                    <Button variant="primary" type="submit" onClick={handleModule}>
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

export default Theme