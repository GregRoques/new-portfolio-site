import React, {Component} from "react";
import axios from 'axios';
import {grAPI} from "../../Dependencies/BackendAPI";
import ReactHtmlParser from "react-html-parser";
import cssTestimonial from './testimonial.module.css';

class Testimonials extends Component{
    state={
        testimonial: {},
        isLoaded: false
    }
    
    componentDidMount(){
        axios.post(`${grAPI}/linkedIn`, {
            type: this.props.testmonialIndex
        }).then(res=>{
            console.log(res.data)
            const recommendations = res.data; 
                this.setState({
                    testimonial: recommendations,
                    isLoaded: true
                })
        })
    }

    TestimonialDisplay = () =>{
        const {testimonial} = this.state;
        return this.state.isLoaded ? (
            <div className={cssTestimonial.testimonialContainer}>
                <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>
                <div className={cssTestimonial.testmonialDisclaimer}>via LinkedIn Recommendations</div>
                <div className={cssTestimonial.testimonial}>
                    "{ReactHtmlParser(testimonial.recommendation)}"
                </div>
                <div className={cssTestimonial.recommender1}>
                    –{testimonial.name}, {testimonial.title} 
                </div>
                <div className={cssTestimonial.recommender2}>
                    (<i>{testimonial.workedWith}</i>)
                </div>
                <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>
            </div>
        ) : <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>;
    }

    render(){
        return this.state.testimonial ? 
        <this.TestimonialDisplay/> :
        <hr style={{width: '80%', margin: '4rem 10%', color: 'black'}}/>;
    }
}
export default Testimonials