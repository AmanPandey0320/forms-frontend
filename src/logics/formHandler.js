import { createForm } from "../repository/form.handler"

export const sendForm = (data,title,desc,theme)=>{
    createForm({data,title,desc,theme},(err,info)=>{
        if(err){
            alert(err.message);
        }else{
            alert('form sent');
        }
    });
}