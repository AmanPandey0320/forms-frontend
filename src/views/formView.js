import {useEffect,useState} from 'react';
import {Navbar} from 'react-bootstrap'
import formTheme from '../themes/formsthemes';
import { useParams,useLocation } from 'react-router-dom';
import {readOne} from '../repository/form.handler';
import FormViewList from '../components/formViewList';
import { Box, Button, ThemeProvider } from '@material-ui/core';
import MuiThemes from '../themes/MuiThemes';
import dotenv from 'dotenv';
dotenv.config();


const FormView = (props) => {
    const {valid} = props;
    const { id } = useParams();
    const state = useLocation();
    const {owner} = state.state || false;
    let baseUrl = process.env.REACT_APP_deployed_url;
    baseUrl = `localhost:3000`;

    const[pending,setPending] = useState(true);
    const [data,setData] = useState({theme:0});

    const readerCallback = (err,info)=>{
        if(err){
            setPending(false);
            alert(err.message);
        }else{
            // console.log(info.formState);
            // console.log(info);
            document.body.style.backgroundColor = formTheme[info.theme].bg;
            setData(info);
            setPending(false);
        }
    }

    useEffect(()=>{
        
        if(valid){
            readOne(id,readerCallback);
        }

        return()=>{
            document.body.style.backgroundColor = null;
        }

    },[valid]);

    

    return ( 
        <div className="my-nav-below my-form-view" style={{backgroundColor:formTheme[data.theme].bg}}>
            {/* {console.log(state)} */}

            <Navbar variant="light" fixed="top" bg="light" expand="lg">
            <Navbar.Brand href="#">
                  <img 
                  height="32"
                  width="32"
                  src='/assets/logo.svg'
                  />
                <span style={{fontFamily: 'Lemonada'}}>Forms</span></Navbar.Brand>      
            </Navbar>

            <div id="form-view-div" className="forms-head form-width" style={{backgroundColor:'white',borderColor:formTheme[data.theme].body}}>

            {pending && <Box textAlign="left" fontSize={24} color="secondary"></Box>}
            {!pending && <Box textAlign="left" fontSize={48} color="primary" >{data.title}</Box>}
            {!pending && <Box>{data.description}</Box>}
            { owner && <Box fontSize={12}>Copy link to share form : <b>{`${baseUrl+state.pathname}`}</b></Box>}

            </div>

            <div className="form-width" style={{borderColor:formTheme[data.theme].body}}>

                {!pending && <FormViewList data={data.data} form_id={id} theme={data.theme}/> }

            </div>

        </div>
     );
}
 
export default FormView;