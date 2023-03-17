import RefreshIcon from '@mui/icons-material/Refresh';
import { Button } from 'react-bootstrap';


const ButtonEl = () => {
return (
<div>
    <Button variant='transprant' className='ms-2' type='reset'>
        <RefreshIcon /> Reset
    </Button>
</div>
)
}

export default ButtonEl;