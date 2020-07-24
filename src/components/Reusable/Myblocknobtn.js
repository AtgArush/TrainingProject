import React from 'react'
import Heading from "../Reusable/Heading"
import { Link } from "gatsby"
export default function Myblocknobtn({heading, givenBG}) {
    return (
        
        <div className={givenBG} >
        <div className="container bgblock my-5 py-4" style={{ marginBottom: "200px", paddingTop: "1150px" }}>
            <Heading title={heading} />
            <div className="row">
                <div className="col-10 col-sm-8 mx-auto text-white text-center">
                    <p className="lead text-white mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam laboriosam, veniam dolores aliquid minima saepe iure! Iure atque fugiat eveniet. Exercitationem provident sit architecto vero necessitatibus nisi magnam quam id inventore iste impedit esse repellendus fuga, blanditiis suscipit mollitia maxime.
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}
