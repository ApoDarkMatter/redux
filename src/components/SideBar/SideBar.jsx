import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import CommentArea from '../CommentArea/CommentArea'

function SideBar() {

    const currentAsin = useSelector((state) => state.books.currentAsin)
    
    useEffect(() => {
        
    }, [currentAsin])
    
    if (currentAsin === "") {
        return (
            <p>No comments, select one book</p>
        )
    } else {
        return (
            <CommentArea asin={currentAsin}/>
        )
    }

}

export default SideBar