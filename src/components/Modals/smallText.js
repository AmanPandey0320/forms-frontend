import { ThemeProvider,makeStyles } from '@material-ui/styles';
import {Button, createMuiTheme, FormControl, Input, InputAdornment, InputLabel, TextField} from '@material-ui/core';
import {useState} from 'react';
import { Modal } from 'react-bootstrap';
import {AiFillFileText,AiFillFile} from 'react-icons/ai'
import {BsFillQuestionSquareFill} from 'react-icons/bs';
import {SiAddthis} from 'react-icons/si';
import { IconContext } from 'react-icons/lib';
import formThemes from '../../themes/formsthemes';
import MuiThemes from '../../themes/MuiThemes';
import { red } from '@material-ui/core/colors';


const SmallTextModal = (props)=>{

    const[quetxt,setQuetxt]=useState(props.value);

    const handleHide = ()=>{

        props.setStModalView(false);
    }

    const handleAdd = ()=>{

        props.handleFormInsert(quetxt);
        setQuetxt('');

    }

    const theme = createMuiTheme({
        palette:{
            primary:{500:formThemes[props.theme].body},
            secondary:red
        }
    });

        return (
            <Modal show={props.stModalView} onHide={handleHide}>
                <Modal.Header>
                    <Modal.Title>
                        <IconContext.Provider value={{size:'1.5em',color:formThemes[props.theme].body}}>
                            {(props.type === '0') && <AiFillFileText/>}
                            {(props.type === '4') && <AiFillFile/>}
                        </IconContext.Provider>
                        {(props.type === '0') && <span>&nbsp;Small-textfield</span>}
                        {(props.type === '4') && <span>&nbsp;File-upload</span>}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <ThemeProvider theme={MuiThemes[props.theme]}>
                        <FormControl fullWidth >
                            <InputLabel htmlFor="small text question">Enter your question :</InputLabel>
                            <Input multiline onChange={(event=>{setQuetxt(event.target.value)})} startAdornment={<InputAdornment position="start"><BsFillQuestionSquareFill color={formThemes[props.theme].body}/></InputAdornment>} />
                        </FormControl>
                    </ThemeProvider>
                </Modal.Body>
                <Modal.Footer>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" onClick={handleHide} color="secondary">Cancle</Button>
                        <Button variant="contained" color="primary" onClick={handleAdd}><SiAddthis/>&nbsp;Add</Button>
                        
                    </ThemeProvider>
                </Modal.Footer>
            </Modal>
        );
}

export default SmallTextModal;