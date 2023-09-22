import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BookCard({bookDetails}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bookDetails.img} />
      <Card.Body>
        <Card.Title>{bookDetails.title}</Card.Title>
        <Card.Text>
          {bookDetails.asin}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default BookCard