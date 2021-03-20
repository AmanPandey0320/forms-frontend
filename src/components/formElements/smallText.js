import { FormControl, IconButton, Input, InputAdornment, InputLabel,ThemeProvider } from "@material-ui/core";
import {MdQuestionAnswer,MdDelete} from 'react-icons/md';
import {RiFileEditFill} from 'react-icons/ri';
import formThemes from "../../themes/formsthemes";
import MuiThemes from "../../themes/MuiThemes";
import SmallTextModal from '../Modals/smallText';

const SmallTxtView = (props) => {
    const {index,question,theme:currTheme,create,handledelete,handleedit,responseHandler} = props;
    const handleChange = (event)=>{
        if(create == '0'){
            let res = {
                qno:index,
                ans:event.target.value,
                qtype:0,
                time: new Date(),
                timestamp: Date.now()
            }
            responseHandler(res,index-1);
        }
    }
    return ( 
        <div className="form-body small-txt-view my-2" style={{borderColor:formThemes[currTheme].body}}>

            <p className="my-1" style={{fontFamily: '"Roboto Slab", serif'}}><strong><span>{index}.&nbsp;</span>{question}</strong></p>
            <ThemeProvider theme={MuiThemes[currTheme]}>
                <FormControl fullWidth>
                    <Input className="mt-1" onChange={handleChange} startAdornment={<InputAdornment position="start"><MdQuestionAnswer color={formThemes[currTheme].body}/></InputAdornment>}/>
                </FormControl>
            </ThemeProvider>

            {(create == '1') && <div className="mt-2"  style={{textAlign:"right"}}><span><IconButton onClick={()=>{handleedit(index-1)}} ><RiFileEditFill color="#303331"/></IconButton></span><span><IconButton onClick={()=>{handledelete(index-1)}} ><MdDelete color="#303331"/></IconButton></span></div>}

            
            
        </div>
     );
}
 
export default SmallTxtView;