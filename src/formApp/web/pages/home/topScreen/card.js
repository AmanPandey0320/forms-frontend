import React from 'react';
import  { useMediaQuery } from 'react-responsive'
import Card from '../../../shared/card';
import Image from '../../../shared/image/index';
import Title from '../../../shared/title';
import Button from '../../../shared/buttons/index';
import { useHistory } from 'react-router-dom'

const HomeCard = ({img,text,button,handler}) => {
    const constrains = useMediaQuery({
        query:'(min-device-width: 750px)'
    })?{
        size:'300px',
        btn:'45%'

    }:{
        size:'220px',
        btn:'24%'
    }
    const history = useHistory();
    return ( 
        <Card size={constrains.size} opacity='0.78' bg='#ffffff' borderRadius="10px">
            <Title top='6%'  textAlign='center' color='#2b2b2b' fontFamily='Lora'  fontWeight="700" text={text}/>
            <Image src={img} alt="img1"/>
            <Button bg='#21bcff' color='#ffffff' onClick={()=>{handler(history)}} borderRadius="10px" padding='8px' width='50%'  margin="auto" position='relative' top={constrains.btn}>{button}</Button>
            
        </Card>
    );
}


 
export default HomeCard;