import React from 'react'
import Nav from './Nav';
import { Button } from 'react-bootstrap';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import success from './SuccessData';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


const SuccessFull = () => {
const navigate = useNavigate();
const handleAddCliente = () => {
navigate("/addClient");
}

const successData = success;

return (
<div className='d-flex bg-color'>
  <Nav />
  <div className='d-flex flex-column w-100'>
    <div className='ps-3 pe-3'>
      <div className='d-flex justify-content-between p-4'>
        <h3 className='text-capitalize'>add client</h3>
        <NotificationsNoneIcon />
      </div>
      <div className='d-lg-flex d-md-flex d-sm-block justify-content-between rounded bg-white p-3'>
        <div className='d-flex gap-1 align-items-center'>
          <CheckCircleOutlineIcon className='fs-2' />
          <h4>You have successfully added Infosys.</h4>
        </div>
        <div className='d-flex gap-3'>
          <Button variant="light">Go to Client Master</Button>
          <Button variant="primary" onClick={handleAddCliente}>Add More Clients</Button>
        </div>
      </div>

      <div className='d-flex flex-wrap  justify-content-between gap-3'>
        {
        successData.map((element, index)=>(
        <Card key={index} sx={{ width: 189 }} className="p-4 mt-3 d-flex flex-column align-items-center">
          <CardMedia component="img" alt="Company Logo" height="120" image={element.img} width="100" className='w-75' />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='fs-9 fw-bold'>
              {element.cName}
            </Typography>
            <Typography variant="body2" color="text.secondary" className='text-center'>
              {(element.clients === "")?"--":element.clients}
            </Typography>
          </CardContent>
          <Button size="small" className={`w-100 fs border-none ${(element.btn==="Go to Config" )
            ? "btn-color text-white" : "btn-bg btn-text-color" }`}>{element.btn}</Button>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {element.view}
            </Typography>
          </CardContent>
        </Card>
        ))
        }

      </div>

    </div>
  </div>
</div>
)
}

export default SuccessFull