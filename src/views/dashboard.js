import {useEffect,useState} from 'react';
import FormList from '../components/formList';
import {readAllForm} from '../repository/form.handler';

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
            <div className="form-width">
                {pending && <span className="text-1">Loading...</span>}
                {!pending && <FormList owner={true} data ={data}/> }
            </div>
        </div>
     );
}
 
export default Dashboard;