import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchData } from "../../reducers/booksList";
import { nanoid } from "@reduxjs/toolkit";
import BookCard from "../BookCard/BookCard";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../SideBar/SideBar";


export function Books() {
  const searchRes = useSelector((state) => state.books.searchResult)
  const select = useSelector((state) => state.books.selected)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(searchData(""))
  }, [select])
  
  return (
    <Container>
      <Row className="h-100">
        <Col lg={9}>
          <Row className="gap-2">
            {searchRes.map(book => (
                <BookCard key={nanoid()} bookDetails={book}/>
            ))
            }
          </Row>
        </Col>
        <Col lg={3}>
          <h2>Comments:</h2>
          <SideBar/>
        </Col>
      </Row>
      
    </Container>
  );
}
