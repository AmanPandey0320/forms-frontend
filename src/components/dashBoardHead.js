import { useHistory } from 'react-router';
import formThemes from '../themes/formsthemes';

const DashBoardHead = (props) => {
    const history = useHistory();
    return ( 
        <div className="dash-head" style={{backgroundColor:formThemes[0].bg}}>

                <div className="dash-head-element" onClick={()=>{history.push('/newform')}}>

                    <img src='./assets/plus.svg' className="dash-img" />
                    
                </div>
                <div className="dash-head-element" onClick={()=>{alert('clicked')}}>

                    <img src='./assets/add-event.svg' className="dash-img" />
                    
                </div>
                <div className="dash-head-element" onClick={()=>{alert('clicked')}}>

                    <img src='./assets/add-event.svg' className="dash-img" />
                    
                </div>
                <div className="dash-head-element" onClick={()=>{alert('clicked')}}>

                    <img src='./assets/add-event.svg' className="dash-img" />
                    
                </div>
                <div className="dash-head-element" onClick={()=>{alert('clicked')}}>

                    <img src='./assets/add-event.svg' className="dash-img" />
                    
                </div>

            </div>
     );
}
 
export default DashBoardHead;