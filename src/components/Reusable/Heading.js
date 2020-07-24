import React from 'react'

export default function Heading({title, myClass}) {
    return (
        <div className = {myClass}>
        <div className="row">
            <div className="col text-center-mb-4">
                <h1 className="display-3 text-center Mytitle">{title}</h1>
            </div>
            </div>
        </div>
    )
}

