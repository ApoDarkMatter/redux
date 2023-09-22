import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from "react-redux";
import { searchData, setSelected } from "../../reducers/booksList";

function NavBar() {
    const dispatch = useDispatch()
    
    const selectCategory = (e) => {
      dispatch(setSelected(e))
    }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">About</Nav.Link>

            <Form.Select onChange={(e) => selectCategory(e.target.value)}>
              <option value="fantasy">Fantasy</option>
              <option value="horror">Horror</option>
              <option value="history">History</option>
              <option value="romance">Romance</option>
              <option value="scifi">Scifi</option>
            </Form.Select>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="text"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange= {(e) => dispatch(searchData(e.target.value))}
          />
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar