import { FormControl, FormControlLabel, RadioGroup ,IconButton} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import {MdDelete} from 'react-icons/md';
import {RiFileEditFill} from 'react-icons/ri';
import formThemes from '../../themes/formsthemes';
import MuiThemes from "../../themes/MuiThemes";
import Radios from "../Checkboxes";

const MultipleMCQ = (props) => {

    const {question,options,theme:currTheme,index} = props;
    const MyRadio = Radios[currTheme];

    return ( 
        <div className="form-body small-txt-view my-2" style={{borderColor:formThemes[currTheme].body}}>
            <p className="my-1" style={{fontFamily: '"Roboto Slab", serif'}}><strong><span>{index}.&nbsp;</span>{question}</strong></p>
            <ThemeProvider theme={MuiThemes[currTheme]}>
                <FormControl component="fieldset">
                        {options.map((option,i)=>{
                            return(
                                <FormControlLabel key={`que${index}op${i}`} control={<MyRadio />} value={option} label={option}/>
                            );
                        })}
                </FormControl>
            </ThemeProvider>
            <div  style={{textAlign:"right"}}>

                    <span><IconButton ><RiFileEditFill color="#303331"/></IconButton></span>
                    <span><IconButton ><MdDelete color="#303331"/></IconButton></span>

            </div>
        </div>
     );
}
 
export default MultipleMCQ;