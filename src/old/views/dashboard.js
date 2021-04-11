import { GridList, GridListTile } from '@material-ui/core';
import {useEffect,useState} from 'react';
import FormList from '../../components/formList';
import {readAllForm} from '../repository/form.handler';
import { useMediaQuery } from 'react-responsive';
import formThemes from '../../themes/formsthemes';
import DashBoardHead from '../../components/dashBoardHead';

const Dashboard = (props) => {

    const[pending,setPending] = useState(true);
    const [data,setData] = useState([]);

    const [col,setCol]=useState(1);
    const isMobile = useMediaQuery({
        query:'(min-device-width: 350px)'
    });
    const isTablet = useMediaQuery({
        query:'(min-device-width: 700px)'
    });
    const isLaptop = useMediaQuery({
        query:'(min-device-width: 1524px)'
    })

    useEffect(()=>{
        if(isLaptop) setCol(4);
        else if(isTablet) setCol(3);
        else if(isMobile) setCol(2);
    });

    const readerCallback = (err,info)=>{
        if(err){
            setPending(false);
            alert(err.message);
        }else{
            // console.log(info.formState);
            setData(info.result);
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
            <DashBoardHead/>
            <div className="form-width dash-body">
                
                {pending && <span className="text-1">Loading...</span>}
                {!pending && <FormList owner={true} col={col} data ={data}/> }
            </div>
        </div>
     );
}
 
export default Dashboard;