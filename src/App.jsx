import Header from './components/Header'
import Form from './components/Form'
import Listado from './components/Listado'
import { useState, useEffect } from 'react'


function App() {
  // states
  const [books, setBooks] = useState([])
  const[book, setBook] = useState({})

 // get localStorage
  useEffect(()=>{
    const searchLocalstorage = () => {
      const listBooks = JSON.parse(localStorage.getItem('Books' || []))
      setBooks(listBooks)
    }
    searchLocalstorage()
  },[])

  // set localStorage
  useEffect(()=>{
    localStorage.setItem('Books', JSON.stringify(books))
  }, [books])

  // delete book
  function deleteBook (id){
    const filterDelete = books.filter(book => book.id !== id )
    setBooks(filterDelete)
  }

  return (
    <div className="container mx-auto md:mt-14 p-5">
      <Header/>
      <div className="md:mt-12 md:flex justify-center">
        <Form
          setBooks={setBooks}
          books={books}
          bookEdit={book}
          setBookEdit = {setBook}
        />
        <Listado
        books={books}
        setBook={setBook}
        deleteBook={deleteBook}
        />
      </div>
    </div>
  )
}

export default App
