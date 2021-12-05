function Error({children}) {

    return (
        <p 
            className="text-center text-red-700 font-bold pb-2">
            {children}
        </p>
    )
}

export default Error
