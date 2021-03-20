import { FormControl, FormControlLabel, RadioGroup ,IconButton} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { useEffect } from "react";
import {MdDelete} from 'react-icons/md';
import {RiFileEditFill} from 'react-icons/ri';
import formThemes from '../../themes/formsthemes';
import MuiThemes from "../../themes/MuiThemes";
import Radios from "../Radios";

const SingleMCQ = (props) => {

    const {question,options,theme:currTheme,index,handledelete,handleedit,create,responseHandler} = props;
    const MyRadio = Radios[currTheme];
    
    const handleChange = (event,opi)=>{

        const res = {
            qno:index,
            ans: event.target.value,
            resOp:opi,
            qtype:2,
            timestamp:Date.now()
        }

        responseHandler(res,index-1);

    }

    return ( 
        <div className="form-body small-txt-view my-2" style={{borderColor:formThemes[currTheme].body}}>
            <p className="my-1" style={{fontFamily: '"Roboto Slab", serif'}}><strong><span>{index}.&nbsp;</span>{question}</strong></p>
            <ThemeProvider theme={MuiThemes[currTheme]}>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name={`question${index}`}>
                        {options.map((option,i)=>{
                            return(
                                <FormControlLabel key={`${i}`} onChange={(event)=>{handleChange(event,i)}} control={<MyRadio/>} value={option} label={option}/>
                            );
                        })}
                    </RadioGroup>
                </FormControl>
            </ThemeProvider>
            {(create == '1') && <div  style={{textAlign:"right"}}><span><IconButton onClick={()=>{handleedit(index-1)}} ><RiFileEditFill color="#303331"/></IconButton></span><span><IconButton onClick={()=>{handledelete(index-1)}} ><MdDelete color="#303331"/></IconButton></span></div>}
        </div>
     );
}
 
export default SingleMCQ;