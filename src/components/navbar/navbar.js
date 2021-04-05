import {React,Component} from 'react';
import {Nav, Navbar,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'; 
import EntryBtn from './entryPoint';
import CreateFormsBtn from './createFormsBtn';



class NavBar extends Component {

    NavItem = () => {
        return ( 
            <Nav className="ml-3 mr-auto">
                <Link className="mr-4" to="/home" style={{color: 'white',textDecoration: 'none'}}>Home</Link>
                <Link className="mr-4" to="/template" style={{color: 'white',textDecoration: 'none'}}>Templates</Link>
                <Link className="mr-4" to="/help" style={{color: 'white',textDecoration: 'none'}}>Help</Link>
            </Nav>
         );
    }

    render() {
        return (
            <Navbar bg="primary"  fixed="top" expand="lg" variant="dark">
              <Navbar.Brand href="#">
                  <img 
                  height="48"
                  width="48"
                  src='/assets/logo.svg'
                  />
                <span style={{fontFamily: 'Lemonada'}}>{this.props.BrandName}</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-collape" />
                <Navbar.Collapse className="" id="navbar-collape">
                       {(this.props.pageName === 'home') && <this.NavItem />}
                    <Nav>
                        {(this.props.pageName === 'home' && this.props.valid === false) && <EntryBtn />}
                        {(this.props.valid === true && this.props.pageName === 'home') && <CreateFormsBtn/>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;