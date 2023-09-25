import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './BookCard.css'
import CommentModal from '../CommentModal/CommentModal';

function BookCard({bookDetails}) {

  const [selected,setSelected] = useState(false)
  
  const select = () => {
    setSelected(!selected)
  }

  
  if(selected) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={bookDetails.img} onClick={select} className={selected ? 'addBorder' : ''}/>
        <Card.Body>
          <Card.Title>{bookDetails.title}</Card.Title>
          <Card.Text>
            {bookDetails.asin}
          </Card.Text>
        </Card.Body>
        <Button variant="primary">Book Details</Button>
        <CommentModal details={bookDetails}/>
      </Card>
    )
  } else {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={bookDetails.img} onClick={select} className={selected ? 'addBorder' : ''}/>
        <Card.Body>
          <Card.Title>{bookDetails.title}</Card.Title>
          <Card.Text>
            {bookDetails.asin}
          </Card.Text>
        </Card.Body>
        <Button variant="primary">Book Details</Button>
        <CommentModal details={bookDetails}/>
      </Card>
    )
  }


}

export default BookCard