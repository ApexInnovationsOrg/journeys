import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestion } from '../actions/getQuestion';

class QuestionText extends Component {

    componentDidMount(){
        this.props.dispatch(getQuestion());
    }

    render() {
    

        if(this.props.question.error)
        {
            return (
                <div className="questionText" style={{color:'red'}}>Error! {this.props.question.error}</div>
            )
        }
        if(this.props.question.loading)
        {
            return (
                <div className="questionText">Loading...</div>
            )
        }

    
        console.log('el props',this.props.question);

        return (
            
            <div className="questionText">{ this.props.question.QuestionText }</div>
        );
    }
}

function mapStateToProps(state){

    return {
        question: state.question
    }
}

export default connect(mapStateToProps)(QuestionText);