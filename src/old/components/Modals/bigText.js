import { Modal } from "react-bootstrap";
import { IconContext } from "react-icons/lib";
import {GrTextAlignFull} from 'react-icons/gr';
import { BsFillQuestionSquareFill } from 'react-icons/bs';
import { SiAddthis } from 'react-icons/si';
import formThemes from '../../themes/formsthemes';
import { Button, createMuiTheme, FormControl, Input, InputAdornment, InputLabel, ThemeProvider } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { useState } from "react";
import MuiThemes from '../../themes/MuiThemes';


const BigText = (props) => {

    const [quetxt, setQuetxt] = useState(props.value);

    const theme = createMuiTheme({
        palette:{
            primary:{500:formThemes[props.theme].body},
            secondary:red
        }
    });

    return ( 
        <Modal show={ props.btModalView } onHide={()=>{props.setBtModalView(false)}}>
            <Modal.Header>
                <Modal.Title>
                    <IconContext.Provider value={{size:'1.5em',color:formThemes[props.theme].body}}>
                        <GrTextAlignFull/>&nbsp;Big-textfield
                    </IconContext.Provider>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ThemeProvider theme={MuiThemes[props.theme]}>
                    <FormControl fullWidth >
                        <InputLabel htmlFor='big text html'>Enter your question&nbsp;:</InputLabel>
                        <Input multiline onChange={event=>{setQuetxt(event.target.value)}} startAdornment={<InputAdornment position="start"><BsFillQuestionSquareFill color={formThemes[props.theme].body}/></InputAdornment>}/>
                    </FormControl>
                </ThemeProvider>

            </Modal.Body>
            <Modal.Footer>

                <ThemeProvider theme={theme}>
                    <Button variant='contained' onClick={()=>{props.setBtModalView(false)}} color="secondary">Cancle</Button>
                    <Button variant='contained' onClick={()=>{props.handleFormInsert(quetxt);setQuetxt('')}} color="primary"><SiAddthis/>&nbsp;Add</Button>
                </ThemeProvider>

            </Modal.Footer>
        </Modal>
     );
}
 
export default BigText;