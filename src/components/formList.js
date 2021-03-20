import { GridList, GridListTile } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import SingleListItem from '../components/singleItemForm';

const FormList = (props) => {
    const {data} = props;
    const [col,setCol]=useState(2);
    const isMobile = useMediaQuery({
        query:'(min-device-width: 300px)'
    });
    const isTablet = useMediaQuery({
        query:'(min-device-width: 700px)'
    });
    const isLaptop = useMediaQuery({
        query:'(min-device-width: 1524px)'
    })

    useEffect(()=>{
        if(isLaptop) setCol(5);
        else if(isTablet) setCol(3);
        else if(isMobile) setCol(2);
    });
    // console.log(data);
    return ( 
        // <div>
        //     {data.map((formData,index)=><SingleListItem owner={props.owner} key={`form${index}`} data={formData}/>)}
        // </div>
        
        <div>
            {console.log(col)}
            <GridList  cols={col}>

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