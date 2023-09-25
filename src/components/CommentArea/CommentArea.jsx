import axios from 'axios'
import React, {useState} from 'react'
import { useEffect } from 'react'
import CommentList from '../CommentList/CommentList'
import AddComment from '../AddComment/AddComment'

const CommentArea = ({asin}) => {
  const url = "https://striveschool-api.herokuapp.com/api/comments/"
  const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVhNGJlMTUxNWY0MTAwMTQ2OTdhMmYiLCJpYXQiOjE2OTU2NzUxNTQsImV4cCI6MTY5Njg4NDc1NH0.eUC1S_2PG1ieo1MStNTXtA_G7YADWVuarJSD0B3PRSU"
  
  const [comment,setComment] = useState([])
  const [availableComment,setAvailableComment] = useState(false)

  const getComments = async () => {
    try {
      const response = await axios.get(url+asin,{
        headers: {
            'Authorization': token
        }})
        
        if(response.data === null) {
          setAvailableComment(false)
        } else {
          setComment(response.data)
          setAvailableComment(true)
        }
          
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    getComments()
  },[])

    if(availableComment) {
      return (
        <>
          <CommentList comments={comment} asin={asin} func={getComments}/>
          <AddComment asin={asin} func={getComments}/>
        </>
      )
    } else {
      return (
        <>
          <p>Nessun Commnento</p>
          <AddComment asin={asin} func={getComments}/>
        </>
      )
    }
  }

export default CommentArea