import React, { Component } from 'react'
import Heading from "../Reusable/Heading"
import Img from "gatsby-image"

const getCaty = items => {
    let holdItem = items.map(items => {
        return items.node.category
    })
    let holdCategories = new Set (holdItem)
    let categories = Array.from(holdCategories)
    categories = ['All', ...categories]
    return categories
}


export default class CourseCart extends Component {
    constructor(props){
        super(props)
        this.state = {
            courses: props.courses.edges,
            mycourses: props.courses.edges,
            mycategory: getCaty(props.courses.edges)
        }
    }

    catyClicked = category => {
        let keepitsafe = [...this.state.courses]

        if (category === 'All') {
            this.setState(() => {
                return {mycourses: keepitsafe}
            })
        }
        else {
            let holdme = keepitsafe.filter( ({node}) => node.category === category )
            this.setState ( () => {
                return { mycourses: holdme }
            } )
        }
    }

    render() {
        return (
            <section className="py-5 mt-5 text-white" style ={{backgroundColor: "#333945"}}>
                <div className="container">
                    <Heading title = "Courses" />
                    <div className="row my-3">
                        <div className="col-10 mx-auto text-center">
                            {
                                this.state.mycategory.map( (category, index) => {
                                    return(
                                        <button type="button" className="btn btn-info m-3 px-3" key = {index} onClick={() => {
                                            this.catyClicked(category)
                                        }} >
                                            {category}
                                        </button>
                                    )
                                } )
                            }
                        </div>
                    </div>
                <div className="row">
                    {this.state.mycourses.map ( ({node}) => {
                        return(
                            <div
                            key = {node.id}
                            className = "col-11 col-md-6 my-3 d-flex mx-auto"
                            > 
                                <Img fixed={node.image.fixed} />
                                <div className="flex-grow-1 px-3">
                                    <div className="d-flex justify-content-between">
                                        <h5 className = "mb-1">{node.title}</h5>
                                        <h5 className = "mb-1 text-success mr-5">{node.price}</h5>
                                        
                                    </div>
                                <p className="text-muted">
                        <small>{node.description.description}</small>
                                </p>
                        {/* <button 
                        data-item-id={node.id}
                        data-item-name={node.title}
                        data-item-price={node.price}
                        data-item-type={node.category}
                        data-item-url="learncodeonline.in"
                        data-item-image={node.image.fixed.src}
                        className="btn btn-warning snipcart-add-item">Join Now</button> */}
                        <button 
                        data-item-id={node.id}
                        data-item-name={node.title}
                        data-item-price={node.price}
                        data-item-type={node.category}
                        data-item-url="learncodeonline.in"
                        data-item-image={node.image.fixed.src}
                        className="btn btn-warning snipcart-add-item">Join Now</button>
                                </div>
                            </div>
                        )
                    } )

                    }
                </div>
                </div>
            </section>
        )
    }
}
