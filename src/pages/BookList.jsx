import React from 'react';
import Book from "../components/Book";

const BookList = ({data}) => {

    const getBook = (id) => {
        const find = data.find((book) => id === book.id)
        console.log(find)
    }

    return (
        <section className="bookList">
            {
                data.map(({title, source, author, id}) =>
                    <Book id={id} title={title} source={source} author={author} key={title} getBook={getBook} />
                )
            }
        </section>
    );
};

export default BookList;