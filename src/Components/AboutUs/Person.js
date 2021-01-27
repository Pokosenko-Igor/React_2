import React from 'react'
import Image from 'react-bootstrap/Image'

const Person = (props)=> {
    return(
        <div className="m-2 mt-4">
            <p className="text-center">{props.fname} {props.lname}</p>
            <Image src={props.img} rounded />
        </div>
    )
}

export default Person