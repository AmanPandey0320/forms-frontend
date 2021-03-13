import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {HiOutlineViewGridAdd} from 'react-icons/hi';

const CreateFormsBtn = () => {
    return ( 
        <>
        <Link to="/newform">
            <Button variant="outline-light mx-1">Create <HiOutlineViewGridAdd/></Button>
        </Link>
        </>
     );
}
 
export default CreateFormsBtn;