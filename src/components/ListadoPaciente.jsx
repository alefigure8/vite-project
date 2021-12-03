import Books from './Books'

function ListadoPaciente() {
    return (
        <div className="md:w-1/2 lg:w-2/5 mt-10 md:mt-0 md:overflow-y-scroll md:h-screen">
            <h2 className="text-3xl font-black text-center" >Book´s List</h2>
            <p className="text-lg mt-5 text-center mb-10"> Admin your {'\n'}
                <span className="text-indigo-600 text-center">
                   books
                </span>
            </p>
            <Books />
            <Books />
            <Books />
            <Books />
            <Books />
            <Books />
        </div>
    )
}

export default ListadoPaciente
