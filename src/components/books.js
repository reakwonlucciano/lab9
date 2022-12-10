import React from "react";
import {BookItem} from './bookItem';

export class Books extends React.Component{
    render(){ //Take collection of books, split into individual books and return bookItem
        return this.props.books.map(
            (book)=>{
                return <BookItem book={book} key={book._id} Reload = {this.props.Reload}></BookItem>
            }
        );
    }
}
