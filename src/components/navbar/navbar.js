import {React,Component} from 'react';
import {Nav, Navbar,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'; 
import EntryBtn from './entryPoint';




class NavBar extends Component {

    NavItem = () => {
        return ( 
            <Nav className="ml-3 mr-auto">
                <Link className="mr-4" to="/home" style={{color: 'white',textDecoration: 'none'}}>Home</Link>
                <Link className="mr-4" to="/getstarted" style={{color: 'white',textDecoration: 'none'}}>Get Started</Link>
                <Link className="mr-4" to="/help" style={{color: 'white',textDecoration: 'none'}}>Help</Link>
            </Nav>
         );
    }

    render() {
        return (
            <Navbar bg="primary"  fixed="top" expand="lg" variant="dark">
              <Navbar.Brand href="#">
                  <img 
                  height="32"
                  width="32"
                  src='/assets/logo.svg'
                  />
                <span style={{fontFamily: 'Lemonada'}}>{this.props.BrandName}</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-collape" />
                <Navbar.Collapse className="" id="navbar-collape">
                       {(this.props.pageName === 'home') && <this.NavItem />}
                    <Nav>
                        {(this.props.pageName === 'home') && <EntryBtn />}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;