import { IconButton } from "@material-ui/core";
import formThemes from "../themes/formsthemes";
import {MdDelete} from 'react-icons/md';
import {RiFileEditFill} from 'react-icons/ri';
import {IoEnter} from 'react-icons/io5';
import {useHistory} from 'react-router-dom';

const SingleItemForm = (props) => {
    const date = new Date(props.data.created_at);
    const history = useHistory();

    // console.log(props.data);

    const openForm = (event)=>{
        const {form_id} = props.data;
        history.push({
            pathname:`/form/${form_id}`,
            state:{owner:props.owner}
        });
    }

    return ( 
        <div className=" my-1 small-txt-view" style={{borderColor:formThemes[props.data.theme].body}}>
            <div className="form-single-item ">
                <p><strong>{props.data.title}</strong></p>
                <p>on {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</p>
                <p>at {date.getHours()} : {date.getMinutes()} IST </p>
            </div>
            <div style={{textAlign:'center'}}>
                <IconButton><MdDelete size="0.75em" color='grey'/></IconButton>
                <IconButton><RiFileEditFill size="0.75em" color='black'/></IconButton>
                <IconButton onClick = {openForm} ><IoEnter size="0.9em" color={formThemes[props.data.theme].body}/></IconButton>
            </div>
        </div>
     );
}
 
export default SingleItemForm;
