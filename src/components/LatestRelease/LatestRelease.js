import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchData } from "../../reducers/booksList";
import { nanoid } from "@reduxjs/toolkit";
import BookCard from "../BookCard/BookCard";
import { Container, Row } from "react-bootstrap";


export function Books() {
  const searchRes = useSelector((state) => state.books.searchResult)
  const select = useSelector((state) => state.books.selected)

  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(searchData(""))
  }, [select])
  
  return (
    <Container>
      <Row className="gap-3">
        {searchRes.map(book => (
          <BookCard key={nanoid()} bookDetails={book} />))
        }
      </Row>
    </Container>
  );
}
