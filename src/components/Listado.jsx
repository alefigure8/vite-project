import Books from './Books'

function ListadoPaciente({books, setBook, deleteBook}) {
    return (
        <div className="md:w-1/2 lg:w-2/5 mt-10 md:mt-0">
            {books && books.length ? 
                (
                    <>
                        <h2 className="text-3xl font-black text-center" >Book´s List</h2>
                        <p className="text-lg mt-5 text-center mb-10"> Admin your {'\n'}
                            <span className="text-indigo-600 text-center font-bold">
                            Books
                            </span>
                        </p>

                        {books.map( book => (
                            <Books 
                                books={book} 
                                key={book.id} 
                                setBook = {setBook}
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
