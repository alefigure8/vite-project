import { useState, useEffect } from 'react'
import Error from './Error'

function Form({ setBooks, books, bookEdit, setBookEdit}) {

    // form state
    const [book, setBook] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [date, setDate] = useState('')
    const [rate, setRate] = useState('')
    const [synopsis, setSynopsis] = useState('')

    //error state
    const [error, setError] = useState(false)

    // wait for changes in bookEdit
    useEffect(() => {
     if (Object.keys(bookEdit).length > 0) {
        // Fill inputs
        setBook(bookEdit.book)
        setAuthor(bookEdit.author)
        setGenre(bookEdit.genre)
        setDate(bookEdit.date)
        setRate(bookEdit.rate)
        setSynopsis(bookEdit.synopsis)
      } 
        }, [bookEdit])

    // validate and send info to App
    function handleSubmit (e) {
        e.preventDefault()

        // validate for empty inputs
        if([book, author, genre, date, rate, synopsis].includes('')){
           return setError(true)
        } 

        setError(false)

        // Form values
        const objBook = {
            book, 
            author, 
            genre, 
            date, 
            rate, 
            synopsis
        }

        // verify if exist in localStorage and chage it or create one
        if(bookEdit.id){
            objBook.id = bookEdit.id
            const booksFilter = books.map(book => book.id === bookEdit.id ? objBook : book )
            setBooks(booksFilter)  

            // set bookEdit in an empty object again
            setBookEdit({})
        } else {
            objBook.id =  generateId()
            setBooks([...books, objBook])  
        }

        // Clean form
        cleanForm()
    }

    // clean form in blank inputs
    function cleanForm () {
        setBook('')
        setAuthor('')
        setGenre('')
        setDate('')
        setRate('')
        setSynopsis('')
    }

    // generate an id for each new element
    function generateId () {
    return Math.random().toString(36).substr(2)
    }

    return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="text-3xl font-black text-center">What i have been reading...</h2>
        <p className="text-lg mt-5 text-center mb-10">Add a {'\n'} <span className="text-indigo-600 font-bold"> Book</span></p>
        <form 
            className="bg-white shadow-md rounded-lg py-10 px-5"
            onSubmit={handleSubmit}
        >
            { error && <Error>All fields are requiered!</Error> }

            <div className="mb-5">
                <label 
                    htmlFor="book" 
                    className="block mb-2 text-gray-700 uppercase font-bold">
                    Book Title
                </label>
                <input 
                    type="text" 
                    name="book" 
                    id="book" 
                    placeholder="Add book title"
                    className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                    value={book}
                    onChange={(e) => setBook(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label 
                    htmlFor="author" 
                    className="block mb-2 text-gray-700 uppercase font-bold">
                    Author
                </label>
                <input 
                    type="text" 
                    name="author" 
                    id="author" 
                    placeholder="Add author"
                    className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label 
                    htmlFor="genre" 
                    className="block mb-2 text-gray-700 uppercase font-bold">
                    Genre
                </label>
                <input 
                    type="text" 
                    name="genre" 
                    id="genre" 
                    placeholder="Add genre"
                    className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label 
                    htmlFor="date" 
                    className="block mb-2 text-gray-700 uppercase font-bold">
                    Date
                </label>
                <input 
                    type="date" 
                    name="date" 
                    id="date" 
                    className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label 
                    htmlFor="rate" 
                    className="block mb-2 text-gray-700 uppercase font-bold">
                    Rate
                </label>
                <input 
                    type="number" 
                    min="1" 
                    max="5"
                    step="0.50"
                    name="rate" 
                    id="rate" 
                    className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label 
                    htmlFor="synopsis" 
                    className="block mb-2 text-gray-700 uppercase font-bold">
                    Synopsis
                </label>
                < textarea 
                    id="synopsis"
                    className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                    placeholder="A bref synopsis og the book"
                    name="synopsis"
                    value={synopsis}
                    onChange={(e) => setSynopsis(e.target.value)}
                >
                    {synopsis}
                </textarea>
            </div>
            <input 
            type="submit" 
            className="bg-indigo-600 w-full text-white rounded-md hover:bg-indigo-700 cursor-pointer p-2 uppercase font-bold transition-all duration-300"
            value={bookEdit.id ? 'Update changes' : 'Save Book'}
            />
        </form>
    </div>
    )
}

export default Form
