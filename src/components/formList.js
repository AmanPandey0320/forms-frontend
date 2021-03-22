import { GridList, GridListTile } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import SingleListItem from '../components/singleItemForm';

const FormList = (props) => {
    const {data,col} = props;
    // console.log(data);
    return ( 
        // <div>
        //     {data.map((formData,index)=><SingleListItem owner={props.owner} key={`form${index}`} data={formData}/>)}
        // </div>
        
        <div>
            {console.log(col)}
            <GridList cellHeight={143}  cols={col}>

                {
                    
                    data.map((formData,index)=><GridListTile key={`form${index}`} col = {index%col+1}>
                        <SingleListItem owner={props.owner} data={formData}/>
                    </GridListTile>)
                }

            </GridList>
        </div>
     );
}
 
export default FormList;