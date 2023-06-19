import React from "react";
import BookList from "./pages/BookList";
import {bookData} from "./data";
import Title from "./UI/Title";
import Header from "./UI/Header";

function App() {
  return (
      <>
        <Header>
            <Title>Bestsellers</Title>
        </Header>
        <BookList data={bookData} />
      </>
);
}

export default App;
