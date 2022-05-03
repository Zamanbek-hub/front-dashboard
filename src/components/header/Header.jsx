import React from 'react';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBCardImage
} from 'mdb-react-ui-kit';

import robot_logo from "../../assets/robot_logo.webp";
import "./Header.css";


function Header() {
    return (
        <header>
            <MDBNavbar expand='lg' className="header_style" light>
                <MDBContainer fluid>
                    <MDBNavbarToggler
                        aria-controls='navbarExample01'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <MDBIcon fas icon='bars' />
                    </MDBNavbarToggler>
                    <div className='collapse navbar-collapse'>
                        <MDBNavbarNav className='mb-2 mb-lg-0'>
                            <MDBNavbarItem active>
                                <MDBNavbarLink className='header_li' aria-current='page' href='/'>
                                    <MDBCardImage src={robot_logo} height='50px' width='50px'/>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem className="header_li">
                                <MDBNavbarLink className="header_link" href='/'>Robots</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </div>
                    <div className='navbar-nav-scroll'>
                        <MDBNavbarNav className='mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <MDBNavbarLink className="header_link" href='#'>Zamanbek</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </div>
                </MDBContainer>
            </MDBNavbar>
            <br />
        </header>
    );
}

export default Header