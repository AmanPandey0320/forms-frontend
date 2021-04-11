import { FormControl, FormControlLabel, RadioGroup ,IconButton} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { useEffect } from "react";
import {MdDelete} from 'react-icons/md';
import {RiFileEditFill} from 'react-icons/ri';
import formThemes from '../../themes/formsthemes';
import MuiThemes from "../../themes/MuiThemes";
import Radios from "../Checkboxes";

const MultipleMCQ = (props) => {

    const {question,options,theme:currTheme,index,handledelete,handleedit,create,responseHandler} = props;
    const MyRadio = Radios[currTheme];
    let op = [];
    let ans = [];
    let res = {
        qno:index,
        qtype:3,
        timestamp: Date.now(),
        resOp:op,
        ans:ans
    }

    const changeHandler = (event,i)=>{

        if(res.resOp[i] == false){
            res.ans[i]=event.target.value;
            res.resOp[i] = true;
        }else{
            res.ans[i]=' ';
            res.resOp[i] = false;
        }

        responseHandler(res,index -1);
        
    }

    useEffect(()=>{
        options.forEach(ele=>{
            op.push(false);
            ans.push(' ');
        });
    },[]);

    return ( 
        <div className="form-body small-txt-view my-2" style={{borderColor:formThemes[currTheme].body}}>
            <p className="my-1" style={{fontFamily: '"Roboto Slab", serif'}}><strong><span>{index}.&nbsp;</span>{question}</strong></p>
            <ThemeProvider theme={MuiThemes[currTheme]}>
                <FormControl component="fieldset">
                        {options.map((option,i)=>{
                            return(
                                <FormControlLabel key={`que${index}op${i}`} onChange={(event)=>{changeHandler(event,i)}} control={<MyRadio />} value={option} label={option}/>
                            );
                        })}
                </FormControl>
            </ThemeProvider>
            {(create == '1') && <div  style={{textAlign:"right"}}><span><IconButton onClick={()=>{handleedit(index-1)}}><RiFileEditFill color="#303331"/></IconButton></span><span><IconButton onClick={()=>{handledelete(index-1)}} ><MdDelete color="#303331"/></IconButton></span></div>}
        </div>
     );
}
 
export default MultipleMCQ;