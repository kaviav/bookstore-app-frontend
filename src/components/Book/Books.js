import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";

const URL = "http://localhost:5000/books/getall";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
  // .then((res) => console.log(res));
};

// const sum = (a,b)=> {return a+b};
// sum(3,4);
// function sum(a,b){
//   return a+b;
// }
// sum(2,6);

////  {books: [{...}, {...}, {....}, {....}]}
// {data: { books: [{...}, {...}, {....}, {....}], headers: {}, config: {} }====== console.log(res)
// console.log(res.data) =====  { books: [{...}, {...}, {....}, {....}], headers: {}, config: {} }

/////

// console.log(res.data.books)==== {books: [{...}, {...}, {....}, {....}]}====kavya

/////
const Books = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchHandler().then((kavya) => setBooks(kavya.books)); // kavya.books==== [{...}, {...}, {....}, {....}]
  }, []);

  return (
    <div style={{ backgroundColor: "rgb(245, 245, 233)" }}>
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />

              {/* data=== book={book} */}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
