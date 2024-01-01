import React from 'react'
import { useParams } from 'react-router-dom';

export default function ProductEditeComponent(props) {
    let { id } = useParams();

  return (
    <div>
        ProductEditeComponent !! {id }
    </div>
  )
}
