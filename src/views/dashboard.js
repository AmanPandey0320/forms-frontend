import {useEffect,useState} from 'react';
import {readAllForm} from '../repository/form.handler';
import SingleListItem from '../components/singleItemForm';
import { propTypes } from 'react-bootstrap/esm/Image';

const Dashboard = (props) => {

    const[pending,setPending] = useState(true);
    const [data,setData] = useState([]);

    const readerCallback = (err,info)=>{
        if(err){
            setPending(false);
            alert(err.message);
        }else{
            // console.log(info.formState);
            setData(info.formState);
            setPending(false);
        }
    }

    useEffect(()=>{
        // console.log(props.valid);
        if(props.valid){
            readAllForm(readerCallback);
        }
    },[props.valid]);

    return ( 
        <div className="my-nav-below">
            {pending && <span className="text-1">Loading...</span>}
            {!pending && <SingleListItem data={data[0]}/>}
        </div>
     );
}
 
export default Dashboard;