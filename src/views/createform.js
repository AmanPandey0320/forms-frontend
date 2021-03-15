import {useEffect,useState} from 'react';
import {Navbar,Nav,Modal,Dropdown,DropdownButton,ButtonGroup} from 'react-bootstrap'
import {MdSettings,MdSend,MdPalette} from 'react-icons/md';
import {BsCircleFill,BsCheckCircle} from 'react-icons/bs';
import {IconContext} from 'react-icons';
import {IconButton,TextField, Radio} from '@material-ui/core';
import Button from '@material-ui/core/Button'
import { makeStyles,createMuiTheme,ThemeProvider, rgbToHex } from '@material-ui/core/styles';
import formTheme from '../themes/formsthemes';
import Radios from '../components/Radios'
import './createform.css'
import { blue, red } from '@material-ui/core/colors';

//bbgopa

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '95%',
      },
    },
    title: {
        fontWeight:500,
        fontSize:24
    },
    description: {
        fontSize:12,
    },
    
  }));

  const theme = createMuiTheme({
      palette:{
          primary:{
              500:'#303331',
              600:"#303330"
          },
          secondary:red,

      }
  });



const CreateForm = () => {
    const materialClass = useStyles();
    const [modalState,setModalState] = useState(false)
    const [currTheme,setCurrTheme] = useState(5);
    const [formTitle,setFormTitle] = useState('Untitled form');
    const [formDescription,setFormDescription] = useState('Form description');
    const [formData,setFormData] = useState([
        {
            type:"tb",
            question:"What is your name?"
        }
    ]);



    return ( 
        <div className="my-nav-below my-form-view" style={{backgroundColor:formTheme[currTheme].bg}}>
            <Navbar variant="light" fixed="top" bg="light" expand="lg">
            <Navbar.Brand href="#">
                  <img 
                  height="32"
                  width="32"
                  src='/assets/logo.svg'
                  />
                <span style={{fontFamily: 'Lemonada'}}>Forms</span></Navbar.Brand>      
                    <Nav className="ml-auto">
                        <div>
                           <DropdownButton
                                as={ButtonGroup}
                                key="left"
                                id={`dropdown-button-drop-left`}
                                drop="left"
                                variant="outline-dark"
                                title={`Add Item`}
                            >
                                <Dropdown.Item eventKey="1">Small-text</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Big-text</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Single-correct MCQ</Dropdown.Item>
                                <Dropdown.Item eventKey="4">Multi-correct MCQ</Dropdown.Item>
                                <Dropdown.Item eventKey="5">File-upload</Dropdown.Item>

                            </DropdownButton>
                            <ThemeProvider theme={theme}>
                                <IconButton color="primary" onClick={()=>{setModalState(true)}}><MdSettings/></IconButton>
                                <IconButton color="primary" aria-label="create and share form"><MdSend/></IconButton>
                            </ThemeProvider>
                        </div>

                    </Nav>
            </Navbar>


            <div className="forms-head form-width" style={{backgroundColor:'white',borderColor:formTheme[currTheme].body}}>
                 
                <form className={materialClass.root} noValidate autoComplete="off">
                    <TextField InputProps={{ classes: { root: materialClass.title} }} id="form-title" onChange={(event)=>{setFormTitle(event.target.value)}} label="Title" defaultValue="Untitled form"/>
                    <TextField InputProps={{ classes: { root: materialClass.description} }} id="form-discription" onChange={(event)=>{setFormDescription(event.target.value)}} label="Description"/>
                </form>
                
            </div>

            <div className="form-body form-width">

                
                
            </div>

            {/* <div className="my-pos-br">
                <Button onClick={()=>{setModalState(true)}} variant="contained"><MdAddBox/>&nbsp;Add</Button>
            </div> */}

            <Modal show={modalState} onHide={()=>{setModalState(false)}}>
                <Modal.Header>
                   <Modal.Title><MdSettings/>&nbsp;Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="recentactivitycontent">
                        <span><IconContext.Provider value={{size:'1.35em'}}><MdPalette/></IconContext.Provider>&nbsp;Theme</span>
                        <span>
                            {formTheme.map((eachTheme,index)=>{
                                return(
                                    <IconButton onClick={()=>{setCurrTheme(index)}} key={`themeBtn${index}`}>
                                        <IconContext.Provider value={{color:eachTheme.body}}>
                                            {(currTheme!=index) && <BsCircleFill/>}
                                            {(currTheme == index) && <BsCheckCircle/>}
                                        </IconContext.Provider>
                                    </IconButton>
                                )
                            })}
                        </span>
                    </p><hr></hr>
                    <p className="recentactivitycontent">

                    </p><hr></hr>
                </Modal.Body>
                <Modal.Footer> 
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" onClick={()=>{setModalState(false)}} color="secondary">Cancle</Button>
                    </ThemeProvider>

                    <Button variant="contained" color="primary">Done</Button>
                </Modal.Footer>
            </Modal>

        </div>
     );
}
 
export default CreateForm;