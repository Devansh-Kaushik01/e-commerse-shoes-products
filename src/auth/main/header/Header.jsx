import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Cart, PersonCircle } from 'react-bootstrap-icons';
// import {Person} from 'react-bootstrap-icons'

function Header() {
    return (
        <>
            <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow py-3">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="navbar-brand text-uppercase fw-semibold">
                            P l a S h o e
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto justify-content-end w-100'>
                            <Nav.Link href='/' className='active text-uppercase'>Home</Nav.Link>
                            <Nav.Link href='/men' className='text-uppercase'>Men</Nav.Link>
                            <Nav.Link href='/women' className='text-uppercase'>Women</Nav.Link>
                            <Nav.Link href='/collection' className='text-uppercase'>Collection</Nav.Link>
                            <Nav.Link href='/story' className='text-uppercase'>Story</Nav.Link>
                            <Nav.Link href='/lookbook' className='text-uppercase'>Lookbook</Nav.Link>
                            <Nav.Link href='/sale' className='text-uppercase'>Sale</Nav.Link>
                            <Nav.Link href='/contact' className='text-uppercase'>Contact</Nav.Link>
                        </Nav>
                        <Nav className='me-auto justify-content-end w-50'>
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                            </form>
                            <Nav.Link href='/men' className=''>
                                <PersonCircle size={25} />
                            </Nav.Link>
                            <Nav.Link href='/contact' className=''>
                                <Cart size={25} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header