import React from 'react';
import Navbar from '../../shared/navbar/home-nav';
import Sticky from 'react-stickynode';
import TopScreen from './topScreen/topScreen';
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory();
    return ( 
        <div>
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                <Navbar bg='#0080ff' color="#ffffff"/>
            </Sticky>
            <TopScreen/>
        </div>
    );
}
 
export default Home;