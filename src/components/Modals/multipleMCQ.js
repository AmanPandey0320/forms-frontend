import { Modal } from "react-bootstrap";
import { IconContext } from "react-icons";
import MuiThemes from '../../themes/MuiThemes';
import formThemes from '../../themes/formsthemes';
import { ImCheckboxChecked } from 'react-icons/im';
import { BsFillQuestionSquareFill } from 'react-icons/bs';
import { IoIosAddCircle } from 'react-icons/io';
import {SiAddthis} from 'react-icons/si';
import { ThemeProvider } from "@material-ui/styles";
import { FormControl, IconButton, Input, InputAdornment, InputLabel, TextField ,Button} from "@material-ui/core";
import { useState } from 'react'; 

const MultiMCQModal = (props) => {

    const [options,setOptions] = useState([]);
    const [quetxt,setQuetxt] = useState('');


    return ( 
        <Modal show={props.mmModalView} onHide={()=>{props.setMmModalView(false)}}>
            <Modal.Header>

                <Modal.Title>
                    <IconContext.Provider value={{size:'1.5em',color:formThemes[props.theme].body}}>
                        <ImCheckboxChecked/>&nbsp;Multi-correct MCQ
                    </IconContext.Provider>
                </Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <ThemeProvider theme={MuiThemes[props.theme]}>
                    <FormControl fullWidth>
                        <InputLabel>Enter your question :</InputLabel>
                        <Input multiline onChange={(event)=>{setQuetxt(event.target.value)}} startAdornment={<InputAdornment position="start"><BsFillQuestionSquareFill color={formThemes[props.theme].body}/></InputAdornment>}/>
                        <br/>
                        {options.map((option,index)=>{
                            return(
                                <span key={`${props.value}op${index}`} className="my-1">
                                    <ThemeProvider theme={MuiThemes[props.theme]}>
                                        <TextField id={`${props.value}Option ${index+1}`} onChange={(event)=>{options[index]=event.target.value}} label={`Option ${index+1}`} defaultValue={option}/>
                                    </ThemeProvider>
                                </span>
                            );
                        })}

                        

                    </FormControl>
                    
                </ThemeProvider>
                <ThemeProvider theme={MuiThemes[props.theme]}>
                    <IconButton color="primary" onClick={()=>{setOptions([...options,'New option'])}}>
                    <IconContext.Provider value={{color:formThemes[props.theme].body}}>
                        <span className="my-1"><IoIosAddCircle/>&nbsp;Add option</span>
                    </IconContext.Provider>
                    </IconButton>
                </ThemeProvider>
            </Modal.Body>
            <Modal.Footer>
                    <ThemeProvider theme={MuiThemes[props.theme]}>
                        <Button variant='contained' onClick={()=>{props.setMmModalView(false)}} color="secondary">Cancle</Button>
                        <Button variant='contained' onClick={()=>{props.handleFormInsert({question:quetxt,option:options});setQuetxt('');setOptions([])}} color="primary"><SiAddthis/>&nbsp;Add</Button>
                    </ThemeProvider>
            </Modal.Footer>
        </Modal>
     );
}
 
export default MultiMCQModal;