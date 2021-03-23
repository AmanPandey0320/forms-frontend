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
import { createForm, editOne } from '../repository/form.handler';
import {RiSave3Fill} from 'react-icons/ri';
import { useHistory,useLocation } from 'react-router';

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

 



const CreateForm = (props) => {
    const editMode = props.edit;
    const location = useLocation();
    let propsData = [];
    const materialClass = useStyles();
    const [curData,setCurData]=useState({});
    const [edIndex,setEdindex] = useState(0);
    const [stModalView,setStModalView] = useState(false);
    const [btModalView,setBtModalView] = useState(false);
    const [smModalView,setSmModalView] = useState(false);
    const [mmModalView,setMmModalView] = useState(false);
    const [fuModalView,setFuModalView] = useState(false);
    const [exam,setExam]=useState(false)
    const [modalState,setModalState] = useState(false)
    const [currTheme,setCurrTheme] = useState(0);
    const history = useHistory();

    let ttl='Untitled form',desc='';

    if(editMode == '1'){
        propsData = JSON.parse(location.state.data) || [];
        ttl = location.state.title;
        desc = location.state.description;
    }

    const [formData,setFormData] = useState(propsData);
    const [formTitle,setFormTitle] = useState(ttl);
    const [formDescription,setFormDescription] = useState(desc);

    const sendForm = (data,title,desc,theme)=>{

        createForm({data,title,desc,theme},(err,info)=>{
            if(err){
                alert(err.message);
            }else{
                history.push('/dashboard');
                alert('form sent');
            }
        });
    
    }

    const editForm = ()=>{

        /*console.log(location.state.title,formData);
        form_id,data,title,description,cb
        */

        const form_id = location.state.form_id;

        editOne(form_id,formData,formTitle,formDescription,(err,info)=>{
            if(err){
                alert(err);
            }else{
                history.push('/dashboard');
                alert('form updated!');
            }
        })
        

    }

    const handleSmallAdd = (question)=>{
        const smdata = {
            type:0,
            que:question
        };

       if(edIndex == formData.length){
        setFormData([...formData,smdata]);
       }else{
           let newData = formData;
           newData[edIndex] = smdata
           setFormData(newData);
       }

        setStModalView(false);
    }
    
    const handleBigAdd = (question)=>{

        const bgdata = {
            type:1,
            que:question
        };

        if(edIndex == formData.length){
            setFormData([...formData,bgdata]);
           }else{
               let newData = formData;
               newData[edIndex] = bgdata
               setFormData(newData);
        }

        setBtModalView(false);

    }

    const handleSingleAdd = (data)=>{
        
        const smdata = {
            type:2,
            que:data.question,
            option:data.option
        };

        if(edIndex == formData.length){
            setFormData([...formData,smdata]);
           }else{
               let newData = formData;
               newData[edIndex] = smdata
               setFormData(newData);
        }

        setSmModalView(false);
    }

    const handleMultiAdd = (data)=>{
        
        const mmdata = {
            type:3,
            que:data.question,
            option:data.option
        }

        if(edIndex == formData.length){
            setFormData([...formData,mmdata]);
           }else{
               let newData = formData;
               newData[edIndex] = mmdata
               setFormData(newData);
        }

        setMmModalView(false);
    }

    const handleFileAdd = (question)=>{

        const fudata = {
            type:4,
            que:question
        }
        if(edIndex == formData.length){
            setFormData([...formData,fudata]);
           }else{
               let newData = formData;
               newData[edIndex] = fudata
               setFormData(newData);
        }

        setFuModalView(false);

    }

    const handleDelete = (index)=>{
        let newFormData = [...formData.slice(0,index)]
        
        if(index!=formData.length-1){
            newFormData = [...newFormData,...formData.slice(index+1)];
        }

        setFormData(newFormData);
    }

    const handleEdit = (index)=>{
        const curd = formData[index];
        setEdindex(index);
        setCurData(curd);
        switch (curd.type) {
            case 0:setStModalView(true);
                break;
            case 1:setBtModalView(true);
                break;
            case 2:setSmModalView(true);
                break;
            case 3:setMmModalView(true);
                break;
            case 4:setFuModalView(true);
                break;
            default:alert('Some error occured!');
                break;
        }
    }

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
                  {/* {console.log(location.state.title)} */}
                <span style={{fontFamily: 'Lemonada'}}>Forms</span></Navbar.Brand>      
                    <Nav className="ml-auto">
                        <div>
                           <DropdownButton
                                as={ButtonGroup}
                                key="left"
                                id={`dropdown-button-drop-left`}
                                drop="left"
                                variant="outline-dark"
                                title={`Add Item`}>

                                <Dropdown.Item eventKey="1" onClick={()=>{setEdindex(formData.length);setCurData({});setStModalView(true)}}>Small-text</Dropdown.Item>
                                <Dropdown.Item eventKey="2" onClick={()=>{setEdindex(formData.length);setCurData({});setBtModalView(true)}}>Big-text</Dropdown.Item>
                                <Dropdown.Item eventKey="3" onClick={()=>{setEdindex(formData.length);setCurData({});setSmModalView(true)}}>Single-correct MCQ</Dropdown.Item>
                                <Dropdown.Item eventKey="4" onClick={()=>{setEdindex(formData.length);setCurData({});setMmModalView(true)}}>Multi-correct MCQ</Dropdown.Item>
                                <Dropdown.Item eventKey="5" onClick={()=>{setEdindex(formData.length);setCurData({});setFuModalView(true)}}>File-upload</Dropdown.Item>

                            </DropdownButton>
                            <ThemeProvider theme={theme}>
                                <IconButton  onClick={()=>{setModalState(true)}}><MdSettings color="#303331"/></IconButton>
                                { (editMode == '0') && <IconButton onClick={()=>{sendForm(formData,formTitle,formDescription,currTheme)}} aria-label="create and share form"><MdSend color="#303331"/></IconButton>}
                                {(editMode == '1') && <IconButton onClick={()=>{editForm()}} aria-label="create and share form"><RiSave3Fill color="#303331"/></IconButton>}
                            </ThemeProvider>
                        </div>

                    </Nav>
            </Navbar>

            <br/>


            <div className="forms-head form-width" style={{backgroundColor:'white',borderColor:formTheme[currTheme].body}}>
                 
                <form className={materialClass.root} noValidate autoComplete="off">
                    <ThemeProvider theme={MyMuiThemes[currTheme]}>
                        <TextField InputProps={{ classes: { root: materialClass.title} }} id="form-title" onChange={(event)=>{setFormTitle(event.target.value)}} label="Title" defaultValue={ttl}/>
                        <TextField className="mt-2" InputProps={{ classes: { root: materialClass.description} }} id="form-discription" onChange={(event)=>{setFormDescription(event.target.value)}} defaultValue={desc} label="Description"/>
                    </ThemeProvider>
                </form>
                
            </div>

            <div className="form-width">

                {formData.map((data,index)=>{
                    switch (data.type) {
                        case 0:return(<SmallTxtView handleedit={handleEdit}  handledelete={handleDelete}key={`Que${index}`} question={data.que} theme={currTheme} index={index+1} create="1"/>);
                        case 1:return(<BigTxtView handleedit={handleEdit}  handledelete={handleDelete}key={`Que${index}`} question={data.que} theme={currTheme} index={index+1} create="1"/>);
                        case 2:return(<SingleMCQView handleedit={handleEdit}  handledelete={handleDelete}key={`Que${index}`} question={data.que} theme={currTheme} index={index+1} create="1" options={data.option}/>);
                        case 3:return(<MultipleMCQView  handleedit={handleEdit} handledelete={handleDelete}key={`Que${index}`} question={data.que} theme={currTheme} index={index+1} create="1" options={data.option}/>);
                        case 4:return(<FileUpload handleedit={handleEdit} handledelete={handleDelete} key={`Que${index}`} question={data.que} theme={currTheme} index={index+1} create="1"/>);
                        default:return(<h3 className="my-4" style={{textAlign:'center'}}>Error showing element! Please contact sender.</h3>);
                    }
                })}
                
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

            <SmallTextModal currData={curData} value= {formData.length} type='0' handleFormInsert={handleSmallAdd} stModalView={stModalView} theme = {currTheme} setStModalView={setStModalView}/>
            <BigTextModal currData={curData} value= {formData.length} handleFormInsert={handleBigAdd} btModalView={btModalView} theme={currTheme} setBtModalView={setBtModalView} />
            <SingleMCQ currData={curData} value={formData.length} handleFormInsert={handleSingleAdd} smModalView={smModalView} theme={currTheme} setSmModalView={setSmModalView}/>
            <MultiMCQ currData={curData} value={formData.length} handleFormInsert={handleMultiAdd} mmModalView={mmModalView} theme={currTheme} setMmModalView={setMmModalView}/>
            <SmallTextModal currData={curData} value= {formData.length} type='4' handleFormInsert={handleFileAdd} stModalView={fuModalView} theme = {currTheme} setStModalView={setFuModalView}/>
            
        </div>
     );
}
 
export default CreateForm;