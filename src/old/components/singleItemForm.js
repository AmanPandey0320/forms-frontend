import { IconButton } from "@material-ui/core";
import formThemes from "../themes/formsthemes";
import {MdDelete} from 'react-icons/md';
import {RiFileEditFill} from 'react-icons/ri';
import {IoEnter,IoDocumentTextSharp} from 'react-icons/io5';
import {useHistory} from 'react-router-dom';
import { useEffect, useState } from "react";
import FormLogo from './formLogo';

let Logo;


const SingleItemForm = (props) => {
    const date = new Date(props.data.created_at);
    const history = useHistory();
    const [opened,setOpened]= useState('');

    // console.log(props.data);

    switch(props.data.theme){
        case 0:Logo = FormLogo.blue;break;
        case 1:Logo = FormLogo.black;break;
        case 2:Logo = FormLogo.green;break;
        case 3:Logo = FormLogo.orange;break;
        case 4:Logo = FormLogo.purple;break;
        case 5:Logo = FormLogo.amber;break;
    
    }

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
        <div className=" my-1 form-single-item" style={{backgroundColor:formThemes[props.data.theme].bg}} onClick={editForm}>
            {/* {console.log(props.data)} */}
            <div>
                <Logo/>
                <div className = "footer-single-item">
                    <p>{props.data.title}</p>
                    <p><IoDocumentTextSharp size="1.3em" color={formThemes[props.data.theme].body}/>&nbsp;<small>on {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</small></p>
                </div>
            </div>
        </div>
     );
}
 
export default SingleItemForm;
