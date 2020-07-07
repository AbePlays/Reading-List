import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

function BookList(props) {
  const displayBooks = () => {
    var data = props.data;
    if (data.loading) {
      return <div>Loading Books...</div>;
    }
    return data.books.map((book) => {
      return <li key={book.id}>{book.name}</li>;
    });
  };

  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
    </div>
  );
}

export default graphql(getBooksQuery)(BookList);
