import { Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AddClient from './AddClient';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ButtonEl from './Button';
import Nav from './Nav';


const CreateProfileForm = () => {

const navigate = useNavigate();
const handlePayment = () => {
navigate("/payment")
}
return (
<>
    <div className="d-flex bg-color">
        <Nav />
        <div className="d-flex flex-column w-100">
            <AddClient />
            <div className='ms-3 me-3 bg-white rounded-bottom-2 p-4'>
                <div>
                    <h3 className='text-capitalize'>create client profile</h3>
                    <p>Add some basic information related to the client.</p>
                    <div className='d-lg-flex d-md-flex d-sm-block'>
                        <input type="file" />
                        <div>
                            <span>company logo</span>
                            <p>Logo ratio shoud be 1:1 and should be 120px X 120 px</p>
                        </div>
                    </div>
                </div>

                <Form>
                    <Row>
                        <Form.Group className="mb-3 col-lg-6 col-md-6 col-sm-12" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Company Name *" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6 col-md-6 col-sm-12" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Website *" />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                        <Form.Select>
                            <option>Select Business Category *</option>
                        </Form.Select>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className="mt-sm-3 mt-lg-0">
                        <Form.Select>
                            <option>Select Facility Management Company *</option>
                        </Form.Select>
                        </Col>
                    </Row>

                    <Row>
                        <Form.Group className="mb-3 mt-3 col-lg-6 col-md-6 col-sm-12" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Company Email Address *" />
                        </Form.Group>

                        <Form.Group className="mb-3 mt-lg-3 mt-sm-0 col-lg-6 col-md-6 col-sm-12"
                            controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Mobile Number *" />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                        <Form.Select>
                            <option>Select State *</option>
                        </Form.Select>
                        </Col>
                        <Col lg={4} md={6} sm={12} xs={12} className="mt-sm-3 mt-lg-0">
                        <Form.Select>
                            <option>Select City *</option>
                        </Form.Select>
                        </Col>
                        <Form.Group className='mb-3 col-lg-2 col-md-3 col-sm-12 mt-lg-0 mt-md-3 mt-sm-3'
                            controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Pincode *" />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group className="mb-3 col-lg-6 col-md-6 col-sm-12" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="GST Number *" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6 col-md-6 col-sm-12" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Fax Number" />
                        </Form.Group>
                    </Row>

                    <div className="d-lg-flex d-md-flex d-sm-block gap-2">
                        <Button variant="primary" type="submit" onClick={handlePayment}>
                            Save & Continue
                            <ArrowForwardIosIcon />
                        </Button>
                        <ButtonEl />
                    </div>



                </Form>
            </div>
        </div>
    </div>
</>
);
}

export default CreateProfileForm;