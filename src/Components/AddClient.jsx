import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const AddClient = () => {
return (


<div className='bg-color ps-3 pe-3'>
  <div className='d-flex justify-content-between'>
    <h3 className='text-capitalize'>add client</h3>
    <NotificationsNoneIcon />
  </div>
  <ul
    className='list-unstyled d-lg-flex d-md-flex d-sm-block gap-sm-3 justify-content-around  rounded-top-2 m-0 border-bottom text-uppercase fw-bolder w-100 bg-white p-3'>
    <li>01 create profile</li>
    <li>02 payment setup</li>
    <li>03 theme setup</li>
    <li>04 modules setup</li>
  </ul>
</div>
)
}

export default AddClient;