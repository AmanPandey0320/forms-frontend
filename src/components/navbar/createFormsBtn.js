import {Button} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import {HiOutlineViewGridAdd} from 'react-icons/hi';
import { logoutAPI } from '../../repository/auth.handler';

const CreateFormsBtn = () => {
    const history = useHistory();
    const signouthandler = () =>{
        logoutAPI((err,info)=>{
            if(err){
                alert('error logging out');
            }else{
                window.location.reload();
            }
        })
    }
    return ( 
        <>
            <Button onClick={signouthandler}  variant="outline-light mx-1"> Sign-out <HiOutlineViewGridAdd/></Button>
        </>
     );
}
 
export default CreateFormsBtn;