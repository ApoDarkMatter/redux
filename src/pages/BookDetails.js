import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import MyFooter from '../components/MyFooter/MyFooter'
import { navLinks } from "../data/myNavBarLinks"
import { footerLinks } from "../data/myFooterLinks"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchDataByAsin } from "../reducers/booksList";
import { nanoid } from "@reduxjs/toolkit";
import { Row } from "react-bootstrap";
import BookCardPriceButton from "../components/BookCardPriceButton/BookCardPriceButton";


const BookDetails = () => {
  const { bookId } = useParams()

  const searchResById = useSelector((state) => state.books.searchResultById)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(searchDataByAsin(bookId))
  }, [])

  console.log(searchResById);
  return (
    <>
        <NavBar links={navLinks}/>
        <Row className="justify-content-md-center">
          <BookCardPriceButton key={nanoid()} bookDetails={searchResById} />
        </Row>
        
        <MyFooter links={footerLinks} />
    </>
  );
};

export default BookDetails;
