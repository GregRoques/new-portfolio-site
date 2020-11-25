import React, {Component} from "react";
import Photography from './Photography'
import Magazines from './Magazines'
import Articles from './Articles'
import "./Design.css";
import InstaGallery from '../Photography/instaGallery';

// Redux
import { connect } from "react-redux";
import SetHeader from '../../Actions/SetHeader'

class Design extends Component{
    state={
        loadingIndex: 0
    }

    componentDidMount() {
        this.props.Header("Media Samples");
        window.scrollTo(0, 0);
    }

    isLoaded = () =>{
        this.setState(prevState =>({
            loadingIndex: prevState.loadingIndex++
        }));
    }

    render(){
        return this.state.loadingIndex === 2 ?(
            <div className="fadeIn">
                <Magazines
                    isLoadedOne={this.isLoaded}
                />
                <Photography/>
                <Articles
                    isLoadedTwo={this.isLoaded}
                />
            </div>
        ): null;
    }
}

const mapDispatchToProps = dispatch =>{
    return{
         Header: (page) => dispatch(SetHeader(page))
    }
 }

export default connect(null, mapDispatchToProps)(Design);