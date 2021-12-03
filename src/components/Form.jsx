function Form() {
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="text-3xl font-black text-center">What i have been reading...</h2>
            <p className="text-lg mt-5 text-center mb-10">Add a {'\n'} <span className="text-indigo-600 font-bold"> Book</span></p>
            <form className="bg-white shadow-md rounded-lg py-10 px-5">
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
                    />
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
