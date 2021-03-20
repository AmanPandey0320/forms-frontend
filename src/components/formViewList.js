import SmallTxtView from '../components/formElements/smallText';
import BigTxtView from '../components/formElements/bigText';
import SingleMCQView from '../components/formElements/singleMCQ';
import MultipleMCQView from '../components/formElements/multipleMCQ';
import FileUpload from '../components/formElements/fileUpload';
import { Button, ThemeProvider } from '@material-ui/core';
import MuiThemes from '../themes/MuiThemes';
import { useEffect } from 'react';

const FormViewList = (props) => {

    let userRes = [];
    const {data,theme:currTheme} = props;
    const formData = JSON.parse(data);

    useEffect(()=>{
        formData.forEach(element => userRes.push({}));
    },[]);

    const responseHandler = (eachRes,index)=>{
        userRes[index] = eachRes;
    }

    return ( 
        <div>
            {formData.map((data,index)=>{
                    switch (data.type) {
                        case 0:return(<SmallTxtView responseHandler={responseHandler} key={`Que${index}`} question={data.que} theme={currTheme} index={index+1} create="0"/>);
                        case 1:return(<BigTxtView responseHandler={responseHandler} key={`Que${index}`} question={data.que} theme={currTheme} index={index+1} create="0"/>);
                        case 2:return(<SingleMCQView responseHandler={responseHandler} key={`Que${index}`} question={data.que} theme={currTheme} index={index+1} create="0" options={data.option}/>);
                        case 3:return(<MultipleMCQView responseHandler={responseHandler}  key={`Que${index}`} question={data.que} theme={currTheme} index={index+1} create="0" options={data.option}/>);
                        case 4:return(<FileUpload responseHandler={responseHandler}  key={`Que${index}`} question={data.que} theme={currTheme} index={index+1} create="0"/>);
                        default:return(<h3 className="my-4" style={{textAlign:'center'}}>Error showing element! Please contact sender.</h3>);
                    }
                })}
                <ThemeProvider theme = {MuiThemes[currTheme]}>
                        <span>
                        <Button color="primary" onClick={()=>{console.log(userRes)}} variant="contained">Submit</Button>
                        &nbsp;&nbsp;<Button color="primary" variant="contained">Reset</Button>
                        </span>
                    </ThemeProvider>
        </div>
     );
}
 
export default FormViewList;