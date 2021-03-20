import { GridList, GridListTile } from '@material-ui/core';
import {useEffect,useState} from 'react';
import FormList from '../components/formList';
import {readAllForm} from '../repository/form.handler';
import { useMediaQuery } from 'react-responsive';

const Dashboard = (props) => {

    const[pending,setPending] = useState(true);
    const [data,setData] = useState([]);

    const [col,setCol]=useState(2);
    const isMobile = useMediaQuery({
        query:'(min-device-width: 568px)'
    });
    const isTablet = useMediaQuery({
        query:'(min-device-width: 768px)'
    });
    const isLaptop = useMediaQuery({
        query:'(min-device-width: 1224px)'
    })

    useEffect(()=>{
        if(isLaptop) setCol(5);
        else if(isTablet) setCol(3);
        else if(isMobile) setCol(2);
    });

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
            <div className="dash-head">
                <img className="dash-img" />
                
            </div>
            <div className="form-width dash-body">
                {pending && <span className="text-1">Loading...</span>}
                {!pending && <FormList owner={true} data ={data}/> }
            </div>
        </div>
     );
}
 
export default Dashboard;