import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Books: NextPage = () => {
  const [books, setBooks] = useState<any>([]);
  const router = useRouter();

  const goToPage = () => {
    router.push("books/add");
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/books")
      .then((response) => setBooks(response.data));
  }, []);

  return (
    <div>
      <div>Here are the books</div>
      <div>
        {books.map((book: any) => {
          return (
            <div key={book.title}>
              <p>{book.title}</p>
              <ul>
                <li>{book.author}</li>
                <li>{book.year}</li>
              </ul>
            </div>
          );
        })}
      </div>
      <button onClick={goToPage}>Add a new book</button>
    </div>
  );
};

export default Books;
