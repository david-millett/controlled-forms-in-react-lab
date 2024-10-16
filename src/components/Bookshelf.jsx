import { useState } from "react";

const Bookshelf = () => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    })

    const handleInputChange = (e) => {
        setNewBook({ ...newBook, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedBooks = [...books, newBook]
        setBooks(updatedBooks)
        setNewBook({ title: '', author: '' })
    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input
                        id="title"
                        name="title"
                        value={newBook.title}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="author">Author:</label>
                    <input
                        id="author"
                        name="author"
                        value={newBook.author}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Add Book</button>
                </form>
            </div>
        <div className="bookCardsDiv">
            {books.map(book => {
                return (
                    <div key={book.title} className="bookCard">
                        <p>{book.title}</p>
                        <p>{book.author}</p>
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default Bookshelf