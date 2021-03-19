import {useEffect,useState} from 'react';
import {Navbar,Nav,Modal,Dropdown,DropdownButton,ButtonGroup} from 'react-bootstrap'
import {MdSettings,MdSend,MdPalette} from 'react-icons/md';
import {BsCircleFill,BsCheckCircle} from 'react-icons/bs';
import {IoSchoolSharp} from 'react-icons/io5';
import {IconContext} from 'react-icons';
import {IconButton,TextField, Radio} from '@material-ui/core';
import Button from '@material-ui/core/Button'
import { makeStyles,createMuiTheme,ThemeProvider, rgbToHex } from '@material-ui/core/styles';
import formTheme from '../themes/formsthemes';
import { blue, red } from '@material-ui/core/colors';
import MyMuiThemes from '../themes/MuiThemes';
import SmallTxtView from '../components/formElements/smallText';
import BigTxtView from '../components/formElements/bigText';
import SingleMCQView from '../components/formElements/singleMCQ';
import MultipleMCQView from '../components/formElements/multipleMCQ';
import FileUpload from '../components/formElements/fileUpload';
import { useParams,useLocation } from 'react-router-dom';
import {readOne} from '../repository/form.handler';

const FormView = (props) => {
    const {valid} = props;
    const {state} = useLocation();
    const { id } = useParams();

    const[pending,setPending] = useState(true);
    const [data,setData] = useState({theme:0});

    const readerCallback = (err,info)=>{
        if(err){
            setPending(false);
            alert(err.message);
        }else{
            // console.log(info.formState);
            console.log(info);
            setData(info);
            setPending(false);
        }
    }

    useEffect(()=>{
        
        if(valid){
            readOne(id,readerCallback);
        }

    },[valid])

    return ( 
        <div className="my-nav-below my-form-view" style={{backgroundColor:formTheme[data.theme].bg}}>

            <Navbar variant="light" fixed="top" bg="light" expand="lg">
            <Navbar.Brand href="#">
                  <img 
                  height="32"
                  width="32"
                  src='/assets/logo.svg'
                  />
                <span style={{fontFamily: 'Lemonada'}}>Forms</span></Navbar.Brand>      
            </Navbar>

            <div className="forms-head form-width" style={{backgroundColor:'white',borderColor:formTheme[data.theme].body}}>
                {pending && <span>Loading...</span>}

                {!pending && <span>{data.data}</span>}
            </div>

        </div>
     );
}
 
export default FormView;