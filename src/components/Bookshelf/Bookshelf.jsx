import { useState } from 'react';


const [books, setBooks] = useState([
    { title: 'Green Eggs and Ham', author: 'Dr. Seuss' },
      { title: 'Let Them', author: 'Mel Robbins' },
    ]);
const [newBook, setNewBook] = useState({ title: '', author: '', });

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook((prevBookValue) => ({ ...prevBookValue, [name]: value, }));
};

const Bookshelf = () => {

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={newBook.title}
          onChange={handleInputChange} // Calls function on input change
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange} // Calls function on input change
        />
      </div>

      <div className="bookCardsDiv">
        {/* Display books dynamically */}
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
