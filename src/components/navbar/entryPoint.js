import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const EntryBtn = () => {
    return ( 
        <div>
            <Link to="/signup">
                <Button variant="outline-light mx-1">Sign Up </Button>
            </Link>
            
            <Link to="/signin">
                <Button variant="outline-light mx-1">Sign In</Button>
            </Link>
        </div>
     );
}

export default EntryBtn;