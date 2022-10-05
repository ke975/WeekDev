import React from 'react'

import { gql, useQuery } from '@apollo/client'
import {Link } from 'react-router-dom'
import { Lessons } from './Lessons'


const GET_lESSONS_QUERY = gql`
query {
  lessons( stage: PUBLISHED) {
    id
    lessonType
    availableAt
    title
    slug
    description
  }
}
`

export  function Sidebar() {
 
  const {data} = useQuery(GET_lESSONS_QUERY)
  console.log(data)


  return (
    <div>
        <div className="accordion" id="accordionExample ">
  <div className="accordion-item bg-dark">
    <h2 className="accordion-header text-white text-center mx-auto" id="headingOne">
      <button className="accordion-button bg-dark text-white  " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Clases de React Js 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body text-white">
        {data?.lessons.map(item=>{
          return(
            <Lessons
            key={item.id}
            title={item.title}
            slug={item.slug}
            description={item.description}
            />
          )
          
        })}
      </div>
    </div>
  </div>

</div>

    </div>
  )
}
