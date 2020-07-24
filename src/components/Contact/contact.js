import React from 'react'
import Heading from "../Reusable/Heading"


export default function Contact() {
    return (
        <section className = "py-3">
            <Heading title = "Contact Us" />
            <div className="col-10 col-sm-8 mx-auto">
                <form action="https://formspree.io/meqrkozl" method="POST">
                    <div className="form-group">
                        <div className="row">
                            <div className="col-6">
                            <input style={{width: "100%"}} className="form-control" type = "text" name="name" id="name" placeholder="First Name">
                            </input>
                            </div>
                            <div className="col-6">
                            <input style={{width: "100%"}} className="form-control" type = "text" name="name" id="name" placeholder="Last Name">
                            </input>
                            </div>
                        </div>
                        
                        <div className="py"></div>
                        <input className="form-control" type = "email" name="email" id="email" placeholder="Your email">
                        </input>
                        <div className="py"></div>
                        <input className="form-control" type = "text" name="Mobile" id="Mobile" placeholder="Your Number">
                        </input>                        
                        <div className="py"></div>
                        <textarea className="form-control" type = "text" name="description" id="description" placeholder="Your Messgae">
                        </textarea>
                    </div>
                    <button className = "btn btn-outline-info btn-block contactUsBtn" type="submit" >
                        SUBMIT
                    </button>
                </form>
            </div>
        </section>
    )
}
