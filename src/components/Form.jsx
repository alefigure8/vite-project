import { useState, useEffect } from 'react'
import Error from './Error'

function Form({ setBooks, books, bookEdit }) {

    // form state
    const [book, setBook] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [date, setDate] = useState('')
    const [rate, setRate] = useState('')
    const [synopsis, setSynopsis] = useState('')

    //error state
    const [error, setError] = useState(false)

    useEffect(() => {
            
    }, [bookEdit])

    //swith for each input value and change states
    function handleValue (e) {
        const inputvalue = e.target.value
        const state = (e.target.id)
        switch (state) {
            case 'book':
                setBook(inputvalue)
                break
            case 'author':
                setAuthor(inputvalue)
                break          
            case 'genre':
                setGenre(inputvalue)
                break          
            case 'date':
                setDate(inputvalue)
                break          
            case 'rate':
                setRate(inputvalue)
                break         
            case 'synopsis':
                setSynopsis(inputvalue)
                break              
        }
    }

    // validate and send info to App
    function handleSubmit (e) {
        e.preventDefault()

      if([book, author, genre, date, rate, synopsis].includes('')){
           return setError(true)
        } 

        setError(false)
        
        const objBook = {id: generateId(), book, author, genre, date, rate, synopsis}
        setBooks([...books, objBook])  
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
            { error && <Error>Todos los campos son obligatorios</Error> }

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
                    onChange={handleValue}
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
                    onChange={handleValue}
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
                    onChange={handleValue}
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
                    onChange={handleValue}
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
                    step="0.25"
                    name="rate" 
                    id="rate" 
                    className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                    value={rate}
                    onChange={handleValue}
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
                    onChange={handleValue}
                >
                    {synopsis}
                </textarea>
            </div>
            <input 
            type="submit" 
            className="bg-indigo-600 w-full text-white rounded-md hover:bg-indigo-700 cursor-pointer p-2 uppercase font-bold transition-all duration-300"
            value="Save"
            />
        </form>
    </div>
    )
}

export default Form
