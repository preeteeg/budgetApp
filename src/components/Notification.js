import React from "react"


const Nofication = ({type,text}) =>
{
    return (
        <div className={`alert alert-${type}`}>{text}</div>
    )
}

export default Nofication