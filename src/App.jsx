import Header from './components/Header'
import Form from './components/Form'
import Listado from './components/Listado'
import { useState } from 'react'


function App() {
  const listBooks = localStorage.getItem('Books')
  const [books, setBooks] = useState(JSON.parse(listBooks) || [])
  const[book, setBook] = useState({})
  localStorage.setItem('Books', JSON.stringify(books))

  return (
    <div className="container mx-auto md:mt-14 p-5">
      <Header/>
      <div className="md:mt-12 md:flex justify-center">
        <Form
          setBooks={setBooks}
          books={books}
          bookEdit={book}
        />
        <Listado
        books={books}
        setBook={setBook}
        />
      </div>
    </div>
  )
}

export default App
