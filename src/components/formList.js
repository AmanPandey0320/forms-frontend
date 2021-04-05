import { GridList, GridListTile } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import SingleListItem from '../components/singleItemForm';

const FormList = (props) => {
    const {data,col} = props;
    let formData = [],temp = [];
    data.map((item,idx)=>{
        if(idx != 0 && idx%col == 0){
            formData.push(temp);
            temp=[];
        }
        temp.push(item);
    });

    formData.push(temp);
    // console.log(data);
    return ( 
        
        <div>
            {
                formData.map((arr,arrIndex)=>{
                    return(
                        <div className="form-list">
                            {
                                arr.map((arrData,index)=><SingleListItem owner={props.owner} data={arrData}/>)
                            }
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default FormList;