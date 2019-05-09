import React from 'react';
import {Navbar, Form, FormControl, Nav, Button} from 'react-bootstrap';



function NavBar(props) {
  return (
    <Navbar bg="dark" expand="lg">
    <Navbar.Brand href="#home">Shoe Stock</Navbar.Brand>
    <Nav>
    <Form inline>
      <FormControl type="text" placeholder="(UPC,Size,Brand,Style)" value={props.filterText} onChange={(event) => {props.setFilterText(event.target.value);}}/>
      {props.filterText && <Button variant="secondary" onClick={() => {props.setFilterText('');}}>Clear</Button>}
    </Form>
 </Nav>
  </Navbar>
  );
}

export default NavBar;