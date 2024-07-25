import React from 'react'
import { EdcuationWrap } from './Education.styles'
import educationimg from '../../../assets/profile/education.png';
const Education = ({data}) => {
  return (
    <EdcuationWrap>
        <div className="wrapper">
           
           {data.map((val, ind)=>(
            <div key={ind}>
                <h2>{val.maintitle}</h2>
            <div className="flex" >
            <figure>
                <img src={educationimg} alt="education" />
            </figure>
            <div className="text">
                <h4>{val.title}</h4>
                <p>{val.subtitle}</p>
                <span>{val.grade}</span><br/>
                <span>{val.year}</span> | <span>{val.since}</span><br/>
                <span>{val.address}</span>
            </div>
           </div>
            </div>
           ))}
           
        </div>
    </EdcuationWrap>
  )
}

export default Education