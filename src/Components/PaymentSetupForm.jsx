import { Row, Col, Form, Button } from 'react-bootstrap';
import AddClient from './AddClient';
import ButtonEl from './Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";
import Nav from './Nav';


const PaymentSetupForm = () => {
    const navigate = useNavigate();
    const handleTheme = () => {
    navigate("/themeForm")
    }


return (
<>
    <div className="d-flex bg-color">
        <Nav />
        <div className='d-flex w-100 flex-column'>
            <AddClient />
            <div className='ms-3 me-3 bg-white rounded-bottom-2 p-4'>
                <div>
                    <h3 className='text-capitalize'>Payment Setup</h3>
                    <p>Set up payments for the client.</p>
                </div>
                <Form>
                    <Row>
                        <Form.Group className="mb-3 col-12" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Billing Address *" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                        <Form.Select>
                            <option>Select State *</option>
                        </Form.Select>
                        </Col>
                        <Col lg={4} md={6} sm={12} xs={12} className="mt-lg-0 mt-md-0 mt-sm-3">
                        <Form.Select>
                            <option>Select City *</option>
                        </Form.Select>
                        </Col>
                        <Form.Group className="mb-3 mt-lg-0 mt-md-3 mt-sm-3 col-lg-2 col-md-12 col-sm-12"
                            controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Pincode *" />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                        <Form.Select>
                            <option>Select Number of Site Access *</option>
                        </Form.Select>
                        </Col>
                        <Form.Group className="mb-3 col-lg-6 col-md-6 col-sm-12 mt-lg-0 mt-md-3 mt-sm-3"
                            controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Amount" />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Discount (%) *" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Reason *" />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                        <h6>Payment Mode</h6>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check inline type="checkbox" label="UPI" />
                            <Form.Check inline type="checkbox" label="Net Banking" />
                            <Form.Check inline type="checkbox" label="Cash" />
                            <Form.Check inline type="checkbox" label="Cheque" />
                            <Form.Check inline type="checkbox" label="Other" />
                        </Form.Group>
                        </Col>

                        <Col lg={6} md={6} sm={12} xs={12}>
                        <h6>Payment Status</h6>
                        <Form.Check inline type="radio" name='radio' label="Paid" />
                        <Form.Check inline type="radio" name='radio' label="Pending" />
                        </Col>
                    </Row>

                    <div className="d-lg-flex d-md-flex d-sm-block gap-2 mt-2">
                        <Button variant="primary" type="submit" onClick={handleTheme}>
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
)
}

export default PaymentSetupForm