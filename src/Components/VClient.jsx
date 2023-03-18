import React from 'react';
import CompanyData from './CompanyData';
import Nav from './Nav';
import { Col, Form, Button } from 'react-bootstrap';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const VClient = () => {
    const data = CompanyData;
return (
    <div className='d-flex bg-color'>
        <Nav />
        <div className='right w-100 bg-dangr p-3 bg-color'>
            <h2 className='text-capitalize'>view clients</h2>
            <div className='d-lg-flex f-md-flex d-sm-flex justify-content-lg-between justify-content-md-between justify-content-sm-between bg-white p-4 rounded'>
                <Col lg={3} md="4" sm="6">
                <Form.Control type="text" placeholder='Search' id="inputPassword5" aria-describedby="passwordHelpBlock" />
                </Col>
                <div className='d-flex gap-2'>
                    <Col lg={7} md={3} sm={6}>
                    <Form.Select aria-label="Default select example">
                        <option>Columns</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    </Col>
                    <Button variant="light" className='d-flex'>
                        <FileDownloadIcon /> Export</Button>
                </div>
            </div>
            <div
                className='bg-color table-responsive-lg table-responsive-md table-responsive-xl table-responsive-xxl table-responsive-sm table-responsive'>
                <table className='table'>
                    <thead>
                        <tr className='text-capitalize'>
                            <th>company name</th>
                            <th>email address</th>
                            <th>phone no</th>
                            <th>contact person</th>
                            <th>Facilitator</th>
                            <th>sites</th>
                            <th>Tenants</th>
                            <th>Tenant Groups</th>
                            <th>actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                        data.map((element, index) => (
                        <tr key={index}>
                            <td><img src={element.img} alt="" /> {element.cName}</td>
                            <td>{element.email}</td>
                            <td>{element.phone}</td>
                            <td>{element.person}</td>
                            <td>{(element.facilitator=== "") ?"--":element.facilitator}</td>
                            <td>{element.sites}</td>
                            <td>{(element.tants=== "") ?"--":element.tants}</td>
                            <td>{(element.tGroups=== "") ?"--":element.tGroups}</td>
                            <td className='position-relative'>
                                <MoreVertIcon />
                            </td>
                        </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            {/* <ul className='list-unstyled bg-white p-2 rounded-1 w-100 position-absolute text-capitalize'>
                <li>
                    <VisibilityIcon /> view details</li>
                <li>
                    <EditIcon /> edit</li>
                <li>
                    <BlockIcon /> block access</li>
                <li>
                    <DeleteIcon /> delete</li>
            </ul> */}
        </div>
    </div>
)
}

export default VClient;