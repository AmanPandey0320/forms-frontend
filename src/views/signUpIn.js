import {useEffect,useState} from 'react';
import SignupCard from '../components/cards/signupCard'
import SigninCard from '../components/cards/signinCard'

const EnterApp = (props) => {

    return ( 
        <div className="my-enter-App">
            {props.card === 'up' && <SignupCard/>}
            {props.card === 'in' && <SigninCard/> }
        </div>
     );
}
 
export default EnterApp;