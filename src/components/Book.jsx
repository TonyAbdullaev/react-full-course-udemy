import React from 'react';
import Image from "../UI/Image";
import Title from "../UI/Title";
import Author from "../UI/Author";
import CButton from "../UI/CButton";

const Book = ({title, source, author, id, getBook}) => {
    return (
        <article className="book">
            <div className="book-order">{`#${id}`}</div>
            <Image img={source} />
            <Title title={title}/>
            <Author author={author} />
            <CButton onClick={() => getBook(id)}>Click on me</CButton>
        </article>
    );
};

export default Book;