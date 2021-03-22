import { IconButton } from "@material-ui/core";
import formThemes from "../themes/formsthemes";
import {MdDelete} from 'react-icons/md';
import {RiFileEditFill} from 'react-icons/ri';
import {IoEnter,IoDocumentTextSharp} from 'react-icons/io5';
import {useHistory} from 'react-router-dom';
import { useEffect, useState } from "react";

const SingleItemForm = (props) => {
    const date = new Date(props.data.created_at);
    const history = useHistory();
    const [opened,setOpened]= useState('');

    // console.log(props.data);

    const openForm = (event)=>{
        const {form_id} = props.data;
        history.push({
            pathname:`/form/${form_id}`,
            state:{owner:props.owner}
        });
    }

    const editForm = (event)=>{
        history.push({
            pathname:`/editform`,
            state:props.data
        });
    }

    useEffect(()=>{



    },[]);

    return ( 
        <div className=" my-1 form-single-item  small-txt-view" style={{borderColor:formThemes[props.data.theme].body}}>
            {/* {console.log(props.data)} */}
            <div>
                <p><strong>{props.data.title}</strong></p>
                <p><IoDocumentTextSharp size="1.3em" color={formThemes[props.data.theme].body}/>&nbsp;<small>on {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</small></p>
            </div>
            <div style={{textAlign:'center'}}>
                <IconButton><MdDelete size="0.75em" color='grey'/></IconButton>
                <IconButton onClick = {editForm}><RiFileEditFill size="0.75em" color='black'/></IconButton>
                <IconButton onClick = {openForm} ><IoEnter size="0.9em" color={formThemes[props.data.theme].body}/></IconButton>
            </div>
        </div>
     );
}
 
export default SingleItemForm;
