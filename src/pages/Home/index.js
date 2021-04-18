import React from 'react';
import Container from '../../Components/Container';
import Navbar from '../../Components/Navbar/home-nav';
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
            <span>aman</span>
        </div>
    );
}
 
export default Home;