import { IconButton} from "@material-ui/core";
import { Form } from "react-bootstrap";
import {MdDelete} from 'react-icons/md';
import {RiFileEditFill} from 'react-icons/ri';
import formThemes from '../../themes/formsthemes';

const FileUpload = (props) => {

    const {question,theme:currTheme,index} = props;
    return ( 
        <div className="form-body small-txt-view my-2" style={{borderColor:formThemes[currTheme].body}}>
            <p className="mt-1 mb-4" style={{fontFamily: '"Roboto Slab", serif'}}><strong><span>{index}.&nbsp;</span>{question}</strong></p>
            <Form>
                <Form.Group>
                    <Form.File onChange={(event)=>{console.log(event.target.files[0])}} label="Select file to be uploaded"/>
                </Form.Group>
            </Form>
            
            <div  style={{textAlign:"right"}}>

                    <span><IconButton ><RiFileEditFill color="#303331"/></IconButton></span>
                    <span><IconButton ><MdDelete color="#303331"/></IconButton></span>

            </div>
        </div>
     );
}
 
export default FileUpload;