function books({ books, setBook, deleteBook }) {
    const {book, author, genre, date, rate, synopsis, id} = books

    //Delete function with confirmation
    function handleDelete () {
        const confirmDelete = confirm(`Wait a sec!!!! \n Are you sure you want to delete ${book}?`)
        if(confirmDelete){
             deleteBook(id)
        }
    }

    function toggle(id){
        document.getElementById(id).classList.toggle('h-full')
    }

    return (
        <div className="bg-white shadow-md rounded-lg py-10 px-5 md:m-3 mb-3 ">
            <div className="flex justify-between">        
                <p className="font-bold mb-3 text-indigo-500 uppercase text-lg">{ book }</p>
                <i 
                className="fas fa-chevron-down flex items-center cursor-pointer"
                onClick={()=>{
                    toggle(id)
                }}
                ></i>
            </div>
            <div className="h-0 h- overflow-hidden" id={id}>
                <p className="font-bold mb-3 text-gray-700 uppercase">Author: {'\n'}
                    <span className="font-normal normal-case">{ author }</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Genre: {'\n'}
                    <span className="font-normal normal-case">{ genre }</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Date: {'\n'}
                    <span className="font-normal normal-case">{ date }</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Rate: {'\n'}
                    <span className="font-normal normal-case">{ rate }</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Synopsis: {'\n'}
                    <span className="font-normal normal-case">{ synopsis }</span>
                </p>
                <div className="flex justify-around mt-10">
                    <button 
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-bold uppercase"
                    onClick= {()=> setBook(books)}
                    >Editar</button>
                    <button 
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white rounded-md font-bold uppercase"
                    onClick={handleDelete}
                    >Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default books
