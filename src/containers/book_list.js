import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from "../actions/index";
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title}
                    onClick={()=> this.props.selectBook(book)}
                    className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        return (
            <div>
                <ul className="list-group col-sm-4">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    //Whatever returned will show up as props in book list
    return {
        books: state.books
    };
}


function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be passed to all reducers
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
