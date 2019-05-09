import React from 'react';
import {Navbar, Form, FormControl, Nav, Button} from 'react-bootstrap';
import styled from "styled-components";
const FullWidthNav = styled(Nav)`
width: 100%;
display: flex;
`;


function NavBar(props) {
  return (
    <Navbar bg="dark" expand="lg">
    <Navbar.Brand href="#home">Shoe Stock</Navbar.Brand>
    <FullWidthNav className="justify-content-end">
    <Form inline>
      <FormControl type="text" placeholder="(UPC,Size,Brand,Style)" className="mr-sm-2" value={props.filterText} onChange={(event) => {props.setFilterText(event.target.value);}}/>
      {props.filterText && <Button variant="secondary" onClick={() => {props.setFilterText('');}}>Clear</Button>}
    </Form>
 </FullWidthNav>
  </Navbar>
  );
}

export default NavBar;