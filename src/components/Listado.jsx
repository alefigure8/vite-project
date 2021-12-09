import Books from './Books'

function ListadoPaciente({books, setBook, deleteBook, setSort, sort}) {

    function handleSubmit(id){
        switch(id){
            case 'date':
                const date = [...books].sort((a, b) => a.date - b.date)
                setSort(date)
                break
            case 'rate':
                const rate = [...books].sort((a, b) => b.rate - a.rate)
                setSort(rate)
                break
            case 'all':
                setSort(books)
                break
        }
    }

    async function handleAuthor(tag){
        const author = books.filter(book => book.author === tag)
       setSort(author)

    }

    async function handleGenre(tag){
        const genre =  books.filter(book => book.genre === tag)
       setSort(genre)
     }

    return (
        <div className="md:w-1/2 lg:w-2/5 mt-10 md:mt-0">
            {books && books.length ? 
                (
                    <>
                        <h2 className="text-3xl font-black text-center" >Book´s List</h2>
                        <p className="text-lg mt-5 text-center mb-5"> Admin your {'\n'}
                            <span className="text-indigo-600 text-center font-bold mb-5">
                            Books
                            </span>
                        </p>
                        <div>
                            <input 
                            type="submit" 
                            className="px-10 py-2 bg-indigo-500 mr-3 rounded-md mb-3 text-white font-semibold cursor-pointer hover:bg-indigo-600 transition-all duration-300 shadow-lg md:ml-3"
                            id="rate"
                            value="Rate"
                            onClick={(e) => {
                                const id = e.target.id
                                handleSubmit(id)}
                            }
                            />
                            <input 
                            type="submit" 
                            className="px-10 py-2 bg-indigo-500 mr-3 rounded-md mb-3 text-white font-semibold cursor-pointer hover:bg-indigo-600 transition-all duration-300 shadow-lg"
                            value="Date"
                            id="date"
                            onClick={(e) => {
                                const id = e.target.id
                                handleSubmit(id)}
                            }
                            />
                            <input 
                            type="submit" 
                            className="px-10 py-2 bg-indigo-500 mr-3 rounded-md mb-3 text-white font-semibold cursor-pointer hover:bg-indigo-600 transition-all duration-300 shadow-lg"
                            id="all"
                            value="All"
                            onClick={(e) => {
                                const id = e.target.id
                                handleSubmit(id)}
                            }
                            />
                        </div>
                        {sort.map( book => (
                            <Books 
                                books={book} 
                                key={book.id} 
                                setBook = {setBook}
                                setSort={setSort}
                                sort={sort}
                                handleGenre={handleGenre}
                                handleAuthor = {handleAuthor}
                                deleteBook={deleteBook}
                            />
                        ))}
                    </>
                ) : 
                (
                    <>
                        <h2 className="text-3xl font-black text-center" >Theres no Books yet</h2>
                        <p className="text-lg mt-5 text-center mb-10"> Add One {'\n'}
                            <span className="text-indigo-600 text-center font-bold">
                            and Create a List
                            </span>
                        </p>
                    </>
                )
            }
        </div>
    )
}

export default ListadoPaciente
