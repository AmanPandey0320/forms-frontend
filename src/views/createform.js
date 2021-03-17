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
import Switches from '../components/Switches';
import MyMuiThemes from '../themes/MuiThemes';
import SmallTextModal from '../components/Modals/smallText';
import BigTextModal from '../components/Modals/bigText';
import SingleMCQ from '../components/Modals/singleMCQ';
import MultiMCQ from '../components/Modals/multipleMCQ';
import SmallTxtView from '../components/formElements/smallText';
import BigTxtView from '../components/formElements/bigText';
import SingleMCQView from '../components/formElements/singleMCQ';
import MultipleMCQView from '../components/formElements/multipleMCQ';
import FileUpload from '../components/formElements/fileUpload';

//bbgopa

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: 'auto',
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
    const [stModalView,setStModalView] = useState(false);
    const [btModalView,setBtModalView] = useState(false);
    const [smModalView,setSmModalView] = useState(false);
    const [mmModalView,setMmModalView] = useState(false);
    const [fuModalView,setFuModalView] = useState(false);
    const [exam,setExam]=useState(false)
    const [modalState,setModalState] = useState(false)
    const [currTheme,setCurrTheme] = useState(5);
    const [formTitle,setFormTitle] = useState('Untitled form');
    const [formDescription,setFormDescription] = useState('Form description');
    const [formData,setFormData] = useState([]);

    const handleSmallAdd = (question)=>{
        const smdata = {
            type:0,
            que:question
        };

        setFormData([...formData,smdata]);

        setStModalView(false);
    }
    
    const handleBigAdd = (question)=>{

        const bgdata = {
            type:1,
            que:question
        };

        setFormData([...formData,bgdata]);

        setBtModalView(false);

    }

    const handleSingleAdd = (data)=>{
        
        const smdata = {
            type:2,
            que:data.question,
            option:data.option
        };

        setFormData([...formData,smdata]);

        setSmModalView(false);
    }

    const handleMultiAdd = (data)=>{
        
        const mmdata = {
            type:3,
            que:data.question,
            option:data.option
        }

        setFormData([...formData,mmdata]);

        setMmModalView(false);
    }

    const handleFileAdd = (question)=>{

        const fudata = {
            type:4,
            que:question
        }

        setFormData([...formData,fudata]);

        setFuModalView(false);

    }

    /*
     *0:small text box 
     *1:big text area
     *2:single option
     *3:multiple option
     *4:upload file
     */

    const GetSwitch = ()=>{
        const SwBtn = Switches[currTheme];

        return <SwBtn checked={exam} onChange={()=>{setExam(!exam)}} />
    }

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
                                <Dropdown.Item eventKey="1" onClick={()=>{setStModalView(true)}}>Small-text</Dropdown.Item>
                                <Dropdown.Item eventKey="2" onClick={()=>{setBtModalView(true)}}>Big-text</Dropdown.Item>
                                <Dropdown.Item eventKey="3" onClick={()=>{setSmModalView(true)}}>Single-correct MCQ</Dropdown.Item>
                                <Dropdown.Item eventKey="4" onClick={()=>{setMmModalView(true)}}>Multi-correct MCQ</Dropdown.Item>
                                <Dropdown.Item eventKey="5" onClick={()=>{setFuModalView(true)}}>File-upload</Dropdown.Item>

                            </DropdownButton>
                            <ThemeProvider theme={theme}>
                                <IconButton  onClick={()=>{setModalState(true)}}><MdSettings color="#303331"/></IconButton>
                                <IconButton  aria-label="create and share form"><MdSend color="#303331"/></IconButton>
                            </ThemeProvider>
                        </div>

                    </Nav>
            </Navbar>


            <div className="forms-head form-width" style={{backgroundColor:'white',borderColor:formTheme[currTheme].body}}>
                 
                <form className={materialClass.root} noValidate autoComplete="off">
                    <ThemeProvider theme={MyMuiThemes[currTheme]}>
                        <TextField InputProps={{ classes: { root: materialClass.title} }} id="form-title" onChange={(event)=>{setFormTitle(event.target.value)}} label="Title" defaultValue="Untitled form"/>
                        <TextField className="mt-2" InputProps={{ classes: { root: materialClass.description} }} id="form-discription" onChange={(event)=>{setFormDescription(event.target.value)}} label="Description"/>
                    </ThemeProvider>
                </form>
                
            </div>

            <div className="form-width">

                {/* {console.log(formData)} */}
                <SmallTxtView question="What is your name?" theme={currTheme} index="1" create="1"/>
                <BigTxtView question="Where do you live?" theme={currTheme} index="2" create="1"/>
                <SingleMCQView question="What is your gender?" theme={currTheme} index="3" create="1" options={['Male','Female']}/>
                <MultipleMCQView question="What is your gender?" theme={currTheme} index="4" create="1" options={['Male','Female']}/>
                <FileUpload question="Upload your aadhar card." theme={currTheme} index="5" create="1"/>

                
            </div>

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
                        <span><IconContext.Provider value={{size:'1.35em'}}><IoSchoolSharp/></IconContext.Provider>&nbsp; Exam-mode</span>
                        <span><GetSwitch/></span>
                    </p><hr></hr>
                </Modal.Body>
                <Modal.Footer> 
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" onClick={()=>{setModalState(false)}} color="secondary">Cancle</Button>
                    </ThemeProvider>

                    <Button variant="contained" color="primary">Done</Button>
                </Modal.Footer>
            </Modal>

            <SmallTextModal currData={{}} value= ' ' type='0' handleFormInsert={handleSmallAdd} stModalView={stModalView} theme = {currTheme} setStModalView={setStModalView}/>
            <BigTextModal currData={{}} value=' ' handleFormInsert={handleBigAdd} btModalView={btModalView} theme={currTheme} setBtModalView={setBtModalView} />
            <SingleMCQ currData={{}} value={formData.length} handleFormInsert={handleSingleAdd} smModalView={smModalView} theme={currTheme} setSmModalView={setSmModalView}/>
            <MultiMCQ currData={{}} value={formData.length} handleFormInsert={handleMultiAdd} mmModalView={mmModalView} theme={currTheme} setMmModalView={setMmModalView}/>
            <SmallTextModal currData={{}} value= ' ' type='4' handleFormInsert={handleFileAdd} stModalView={fuModalView} theme = {currTheme} setStModalView={setFuModalView}/>
            
        </div>
     );
}
 
export default CreateForm;