import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Cart from '../../Cart'


function Navigation() {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Master-Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" disabled />
      <Button variant="outline-success">Search</Button>
    </Form>
    </Nav>
    <Nav>
      <NavDropdown title='Sign In' id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><Button variant='outline-success' className='btn-block'>Log In</Button></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2"><Button variant='outline-info' className='btn-block'>Sign Up</Button></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">Orders</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Saved Items</NavDropdown.Item>
      </NavDropdown>
    <Nav.Link href="/cart" className='d-flex align-center'> <Cart/> <span style={{padding:0,margin:0,lineHeight:'1.5em'}}> Cart</span></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navigation
