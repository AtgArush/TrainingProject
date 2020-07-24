import React from 'react'
import Heading from "../Reusable/Heading"

export default function DuelBLockAbout({heading, imageUrl}) {
    return (
        <section className="my-5 py-4 bg-theme">
            <div className="container">
                <Heading title={heading}></Heading>
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laboriosam illum similique ea ipsum dolor a, soluta recusandae earum expedita, totam quos perspiciatis animi itaque doloribus ipsa, fugiat aut incidunt. consectetur adipisicing elit. Nemo sit, illo obcaecati debitis labore deleniti porro odit, veniam nobis deserunt nihil. Quo velit sit dolorum magni impedit dolorem vero debitis voluptatum. Odio repudiandae nostrum ducimus reprehenderit neque itaque ut vero? Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident aspernatur ex minima neque laudantium vitae ipsam saepe placeat voluptatibus. sit amet consectetur adipisicing elit. Cupiditate dolore, temporibus a voluptatum neque ab nulla, maxime dicta eum accusantium nesciunt maiores aliquid officiis qui tempora sequi. Tenetur, sapiente reprehenderit!
                        </p>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className = "imagecard">
                                <img className="card-img-top " src={imageUrl} alt="Image goes here"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Just Click photos</h5>
                                <p className="card-text"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur deleniti placeat vel at labore recusandae doloribus voluptas facere quod eaque.</p>
                                <div className="text-center">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
