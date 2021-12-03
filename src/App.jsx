import Header from './components/Header'
import Form from './components/Form'
import ListadoPaciente from './components/ListadoPaciente'


function App() {
  return (
    <div className="container mx-auto md:mt-14 p-5">
      <Header/>
      <div className="md:mt-12 md:flex justify-center">
        <Form/>
        <ListadoPaciente/>
      </div>
    </div>
  )
}

export default App
