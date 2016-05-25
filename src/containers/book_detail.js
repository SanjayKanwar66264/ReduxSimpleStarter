import React,{Component} from 'react';
import {connect} from 'react-redux';


export default class BookDetail extends Component{
    render(){
        if(!this.props.book){
            return(
                <div>
                    Please Select Book
                </div>
            )
        }
        return(
            <div>
                <h3>Details for:</h3>
                <div>{this.props.book.title}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    //Whatever returned will show up as props in book list
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail)

